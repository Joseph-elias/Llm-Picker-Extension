from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from io import BytesIO
import google.generativeai as genai
import os
from dotenv import load_dotenv

# 🔐 Load env variables
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = Flask(__name__)
CORS(app)

# ⬇️ Load CSV dataset (once at startup)
print("Loading leaderboard dataset...")
leaderboard_df = pd.read_csv("huggingface_v2.csv")

# 🔁 Task-to-benchmark mapping
task_to_benchmark = {
    "code": "evaluations_ifeval_normalized_score",
    "math": "evaluations_math_normalized_score",
    "reasoning": "evaluations_bbh_normalized_score",
    "translation": "evaluations_musr_normalized_score",
    "chat": "model_average_score"  # generic score
}


# 🧠 Gemini for task classification
def classify_task_with_gemini(user_input):
    prompt = f"""You are an expert at evaluating language model tasks.

Given this input from a user:
"{user_input}"

Which type of task is this best described as? Choose one of the following categories:
- code
- math
- translation
- reasoning
- chat

Just respond with the one word category (like "code").
"""
    model = genai.GenerativeModel("models/gemini-1.5-flash-latest")
    response = model.generate_content(prompt)
    category = response.text.strip().lower()
    return category if category in task_to_benchmark else "chat"

# 🔍 Extract benchmark score from each row
def extract_score(row, benchmark_key):
    return row.get(benchmark_key, 0)


# 🧠 Recommendation endpoint
@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    user_task = data.get("task", "")
    task = classify_task_with_gemini(user_task)
    benchmark = task_to_benchmark.get(task)

    if not benchmark:
        return jsonify({"error": "Unsupported task"}), 400

    try:
        scored_models = []
        for _, row in leaderboard_df.iterrows():
            model_name = row.get("model_name", "Unknown")
            score = extract_score(row, benchmark)
            if pd.notna(score):  # only keep models with valid score
                scored_models.append((model_name, score))

        if not scored_models:
            return jsonify({"error": "No models found with this benchmark"}), 404

        top_model = max(scored_models, key=lambda x: x[1])
        top_row = leaderboard_df[leaderboard_df["model_name"] == top_model[0]].iloc[0]

        return jsonify({
            "model_name": top_model[0],
            "score": round(top_model[1], 3),
            "task": task,
            "benchmark": benchmark,
            "details": {
                "architecture": top_row.get("model_architecture", "Unknown"),
                "precision": top_row.get("model_precision", "Unknown"),
                "weight_type": top_row.get("model_weight_type", "Unknown"),
                "params_billion": top_row.get("metadata_params_billions", "Unknown"),
                "base_model": top_row.get("metadata_base_model", "Unknown"),
                "license": top_row.get("metadata_hub_license", "Unknown"),
                "upload_date": top_row.get("metadata_upload_date", "Unknown")
            }
        })


    except Exception as e:
        print("Error during recommendation:", str(e))
        return jsonify({"error": "Server error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
