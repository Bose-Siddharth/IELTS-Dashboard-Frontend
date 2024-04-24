import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SemiSpherical = ({ progress }) => {
  const calculateColor = (progress) => {
    if (progress <= 33) {
      return 'url(#yellowBlue)'; // Yellow for 0-33%, blue for remaining
    } else if (progress <= 66) {
      return 'url(#yellowGreen)'; // Yellow for 0-33%, green for 33-66%
    } else {
      return 'url(#yellowGreenBlue)'; // Yellow for 0-33%, green for 33-66%, blue for 66-100%
    }
  };

  const strokeColor = calculateColor(progress);

  return (
    <div style={{ width: 'xl:350px lg:100px', height: 'xl:160px lg:50px'  }} className='relative'>
      {
        (progress===100)&& <h1 className='absolute top-[40%] left-[37.5%] font-semibold text-[2rem]'>{progress}</h1>
      }
      {
        (progress<100)&& <h1 className='absolute top-[40%] left-[40%] font-semibold text-[2rem]'>{progress}</h1>
      }
      <div className='absolute top-[40%] left-[51%] font-semibold text-[2rem]'>%</div>
      <h2 className='absolute top-[68%] left-[40%] opacity-[50%]'>Completed</h2>
      <svg style={{ width: 0, height: 0 }}>
        <defs>
          <linearGradient id="yellowBlue" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="yellowGreen" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#32CD32" />
          </linearGradient>
          <linearGradient id="yellowGreenBlue" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#32CD32" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbar
        value={progress}
        text={``}
        circleRatio={0.5}
        className="transform -rotate-90"
        styles={{
          trail: {
            transformOrigin: 'center center',
            strokeLinecap: "rounded",
          },
          path: {
            transformOrigin: 'center center',
            stroke: strokeColor,
            strokeLinecap: "rounded",
          },
          text: {
            fontSize: '8px',
            dominantBaseline: 'central',
          },
        }}
        strokeWidth={3.8}
      />
    </div>
  );
};

export default SemiSpherical;