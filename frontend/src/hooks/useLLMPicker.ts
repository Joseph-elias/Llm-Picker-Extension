import { useState } from 'react';

interface LLMResult {
  model_name: string;
  score: number;
  task: string;
  benchmark: string;
  details: {
    architecture: string;
    precision: string;
    weight_type: string;
    params_billion: number;
    base_model: string;
    license: string;
    upload_date: string;
  };
}

export const useLLMPicker = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<LLMResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const findBestLLM = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: query })
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data);
      } else {
        console.error('Server error:', data.error);
        setResult(null);
      }
    } catch (error) {
      console.error('Error calling backend:', error);
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    query,
    setQuery,
    result,
    isLoading,
    findBestLLM
  };
};
