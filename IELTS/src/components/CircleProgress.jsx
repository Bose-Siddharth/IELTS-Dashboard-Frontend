import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircleProgress = ({percentage ,color1, color2}) => {
  return (
    <div>
      
      <CircularProgressbar
             
             value={percentage}
          text={`${percentage}%`}
                  styles={{
              root: {
                     width: '150px', // Adjust the width to make the progress bar smaller
                       height: '150px', // Adjust the height to make the progress bar smaller
                     },
             path: {
             stroke: color1,
             // strokeLinecap: 'butt',
             transition: 'stroke-dashoffset 0.5s ease 0s',
             transform: 'rotate(0.25turn)',
             transformOrigin: 'center center',
             },
             trail: {
             stroke: color2,
             strokeLinecap: 'butt',
             transform: 'rotate(0.25turn)',
             transformOrigin: 'center center',
             },
             text: {
             fill: '#000',
             fontSize: '20px', // Adjust the font size to make the text smaller
             },
             background: {
             fill: '#000000',
             },
         }}
             />

    </div>
  )
}

export default CircleProgress
