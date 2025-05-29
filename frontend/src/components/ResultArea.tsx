import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface ResultAreaProps {
  result: { model: string; explanation: string } | null;
}

const ResultArea: React.FC<ResultAreaProps> = ({ result }) => {
  return (
    <AnimatePresence>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold text-blue-600">
              {result.model}
            </h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {result.explanation}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultArea