import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResultAreaProps {
  result: {
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
            Recommended: {result.model_name}
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Score:</strong> {result.score}</p>
            <p><strong>Task:</strong> {result.task}</p>
            <p><strong>Benchmark:</strong> {result.benchmark}</p>
            <p><strong>Architecture:</strong> {result.details.architecture}</p>
            <p><strong>Precision:</strong> {result.details.precision}</p>
            <p><strong>Weight Type:</strong> {result.details.weight_type}</p>
            <p><strong>Parameters:</strong> {result.details.params_billion}B</p>
            <p><strong>Base Model:</strong> {result.details.base_model}</p>
            <p><strong>License:</strong> {result.details.license}</p>
            <p><strong>Upload Date:</strong> {result.details.upload_date}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultArea;
