import React from 'react';

const VerticalProgressBar = ({ progress, height, width }) => {
  const calculateColor = () => {
    if (progress <= 33) {
      return ['#FFD700', '#3B82F6']; // Yellow for 0-33%, blue for remaining
    } else if (progress <= 66) {
      return ['#FFD700', '#32CD32']; // Yellow for 0-33%, green for 33-66%
    } else {
      return ['#FFD700', '#32CD32', '#3B82F6']; // Yellow for 0-33%, green for 33-66%, blue for 66-100%
    }
  };

  const fillColors = calculateColor();
  const y = height - (progress / 100) * height;
  const cornerRadius =5;

  return (
    <svg
      className=" rounded-full"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="#E5E7EB"
    >
      {/* Background bar */}
      <rect x="0" y="0" width={width} height={height} fill="#E5E7EB" className='rounded-full'/>
      {/* Progress bar */}
      {fillColors.map((color, index) => (
        <rect
          key={index}
          x="0"
          y={index * (height / fillColors.length)}
          width={width}
          height={(height / fillColors.length) } // Add 1 to avoid tiny gaps between colors
          fill={color}
        />
      ))}
    </svg>
  );
};

export default VerticalProgressBar;
