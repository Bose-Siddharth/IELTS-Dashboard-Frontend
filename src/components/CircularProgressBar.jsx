import React from 'react';

const CircularProgressBar = ({ progress,color,cirColor }) => {
  const strokeWidth = 8; // Width of the progress bar stroke
  const radius = 50 - strokeWidth / 2; // Radius of the circle

  const circumference = radius * 2 * Math.PI; // Circumference of the circle

  // Calculate the dash offset based on the progress
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-36 h-36 text-[#FFFFFF]" viewBox="0 0 100 100">
      <circle
        className="progress-circle"
        cx="50"
        cy="50"
        r={radius}
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-circle"
        cx="50"
        cy="50"
        r={radius}
        fill={color}
        stroke={cirColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round" 
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="font-bold"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
