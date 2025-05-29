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
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-all duration-200 ease-in-out transform hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin h-4 w-4 mr-2" />
          Finding...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default ActionButton;