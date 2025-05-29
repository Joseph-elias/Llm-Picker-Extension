import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResultAreaProps {
  result: {
    model: string;
    score: number;
    task: string;
    benchmark: string;
  } | null;
}

const ResultArea: React.FC<ResultAreaProps> = ({ result }) => {
  return (
    <AnimatePresence>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-md"
        >
          <h3 className="font-medium text-blue-600 mb-1">
            Recommended: {result.model}
          </h3>
          <div className="text-sm text-gray-700">
            <p><strong>Score:</strong> {result.score}</p>
            <p><strong>Task:</strong> {result.task}</p>
            <p><strong>Benchmark:</strong> {result.benchmark}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultArea;
