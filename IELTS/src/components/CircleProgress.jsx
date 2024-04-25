import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles for the progress bar

const CircleProgress = ({ percentage, color1, color2 }) => {
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          root: { width: '100%', height: '100%' },
          path: { stroke: color1 },
          trail: { stroke: color2 },
          text: {
            fill: '#000',
            fontSize: '20px',
            dominantBaseline: 'middle', // Vertical alignment
            textAnchor: 'middle', // Horizontal alignment
          },
          background: { fill: '#000000' },
        }}
      />
    </div>
  );
};

export default CircleProgress;
