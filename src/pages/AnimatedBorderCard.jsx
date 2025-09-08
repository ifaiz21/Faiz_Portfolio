// AnimatedBorderCard.jsx
import React from 'react';

const AnimatedBorderCard = ({ children }) => {
  return (
    <div className="relative p-1 rounded-2xl overflow-hidden animate-border-spin">
      <div className="absolute inset-0 border-gradient-animation rounded-2xl"></div>
      <div className="relative bg-[#D1D5DB] rounded-2xl p-4 shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderCard;