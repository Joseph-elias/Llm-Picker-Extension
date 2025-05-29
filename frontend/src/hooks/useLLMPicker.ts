import { useState } from 'react';

interface LLMResult {
  model: string;
  explanation: string;
}

// This is a mock implementation - in a real extension, this would call an actual API
const mockGetRecommendation = async (query: string): Promise<LLMResult> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simple mock logic for demonstration
  if (query.toLowerCase().includes('code')) {
    return {
      model: 'Claude Opus',
      explanation: 'Claude Opus excels at understanding and generating code across multiple languages with detailed explanations.'
    };
  } else if (query.toLowerCase().includes('creative') || query.toLowerCase().includes('story')) {
    return {
      model: 'GPT-4o',
      explanation: 'GPT-4o demonstrates exceptional creative writing abilities and storytelling with rich details and coherent narratives.'
    };
  } else if (query.toLowerCase().includes('image') || query.toLowerCase().includes('visual')) {
    return {
      model: 'Gemini Pro',
      explanation: 'Gemini Pro has strong multimodal capabilities, making it excellent for tasks involving both text and visual elements.'
    };
  } else {
    return {
      model: 'Anthropic Claude 3 Sonnet',
      explanation: 'For general purpose tasks with a balance of intelligence and cost-effectiveness, Claude 3 Sonnet provides excellent results.'
    };
  }
};

export const useLLMPicker = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<LLMResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const findBestLLM = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      const recommendation = await mockGetRecommendation(query);
      setResult(recommendation);
    } catch (error) {
      console.error('Error finding best LLM:', error);
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