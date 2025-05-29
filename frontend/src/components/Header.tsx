import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-3 mb-1">
      <Sparkles className="text-blue-500 h-6 w-6" />
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h1>
    </div>
  );
};

export default Header