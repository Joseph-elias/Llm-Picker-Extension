import React from 'react';
import { Loader2 } from 'lucide-react';

interface ActionButtonProps {
  onClick: () => void;
  isLoading: boolean;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, isLoading, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-200 ease-in-out transform hover:translate-y-[-2px] active:translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin h-5 w-5" />
          <span>Finding the perfect LLM...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default ActionButton