# 🤖 LLM Picker Pro – Chrome Extension

LLM Picker Pro is a powerful Chrome Extension that helps you find the **best Large Language Model (LLM)** based on your task (e.g., code, math, translation) and advanced filters like weight type, license, architecture, and parameter size.

🔎 Powered by Google Gemini for task classification  
📊 Based on HuggingFace Open LLM Leaderboard data  
⚡ Built with React + TypeScript + Vite + Flask

---

## 🚀 Features

- 🔍 **Task Detection** – Uses Gemini to classify user input into task categories (e.g., "code", "translation", etc.)
- 🎯 **LLM Recommendation** – Automatically suggests the best model for your task using real benchmark scores
- 🧩 **Advanced Filters** – Filter by:
  - Model Weight Type (`Open`, `Restricted`, `Proprietary`)
  - License (`Apache 2.0`, `MIT`, etc.)
  - Architecture (`Transformer`, `Mistral`, etc.)
  - Max Number of Parameters (in billions)
- 📊 **Score + Details View** – Shows benchmark score, task, architecture, and metadata
- 🛠️ **Fully Local Backend** – Uses Flask API over a local CSV dataset (`huggingface_v2.csv`)

---

## 🧱 Project Structure

```
Llm-Picker-Extension/
├── backend/
│   └── app.py                ← Flask backend with Gemini task classifier
├── frontend/
│   ├── components/           ← React components (Header, Filters, ResultArea, etc.)
│   ├── hooks/useLLMPicker.ts← Main frontend logic with fetch + filter logic
│   ├── App.tsx               ← Main popup view
│   └── index.html
├── public/
│   └── icons/                ← Extension icons
├── manifest.json            ← Chrome Extension manifest v3
├── huggingface_v2.csv       ← CSV file from HF leaderboard
└── README.md                ← This file
```

---

## 🧪 How to Run Locally

### 1. Clone the project

```bash
git clone https://github.com/Joseph-elias/Llm-Picker-Extension.git
cd llm-picker-pro
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
npm run build  # or `npm run dev` for development
```

### 3. Run the Flask backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

> Make sure you have a `.env` file with your GEMINI API key.

### 4. Load the extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load Unpacked**
4. Select the `frontend/dist` folder

---

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Flask, Pandas, Google Gemini API
- **Extension**: Chrome Extension (Manifest V3)

---

## 🧑‍💻 Developed By


- [GitHub](https://github.com/joseph-ai-health)
- [LinkedIn](https://linkedin.com/in/joseph-elias-al-khoury-0a54a8239/)

---

## 📄 License

This project is licensed under [MIT License](LICENSE).

