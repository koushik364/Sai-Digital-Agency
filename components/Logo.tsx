
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="circleClip">
          <circle cx="200" cy="200" r="200" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="200" fill="#02265d" />
      <path 
        d="M-50 315 H180 C280 315 280 195 180 195 H150 C50 195 50 75 150 75 H450" 
        fill="none" 
        stroke="#0cc0df" 
        strokeWidth="75" 
        strokeLinecap="round" 
        clipPath="url(#circleClip)" 
      />
    </svg>
  );
};

export default Logo;
