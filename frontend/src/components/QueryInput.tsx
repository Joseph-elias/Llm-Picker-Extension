import React from 'react';

interface QueryInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const QueryInput: React.FC<QueryInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none text-sm shadow-sm bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default QueryInput