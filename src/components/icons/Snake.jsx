import React from 'react';

// Custom Snake icon matching lucide-react style
export const Snake = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M16 8c2.21 0 4 1.79 4 4v0c0 2.21-1.79 4-4 4H8c-2.21 0-4 1.79-4 4v0c0 2.21 1.79 4 4 4h8" />
      <path d="M8 8c-2.21 0-4-1.79-4-4v0" />
      <path d="M8 8h1" />
      <circle cx="8" cy="4" r="2" />
      <path d="M5 4h-2" />
    </svg>
  );
};
