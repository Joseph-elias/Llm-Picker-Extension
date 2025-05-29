import React from 'react';

interface PopupContainerProps {
  children: React.ReactNode;
}

const PopupContainer: React.FC<PopupContainerProps> = ({ children }) => {
  return (
    <div className="w-[400px] bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans overflow-hidden">
      <div className="p-6 flex flex-col gap-5">
        {children}
      </div>
    </div>
  );
};

export default PopupContainer;