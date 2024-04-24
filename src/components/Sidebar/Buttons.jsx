import React, { useState } from 'react';

const Buttons = ({ img, heading, isOpen,img2 }) => {
  const [select, setSelect] = useState(false);

  const handleMouseEnter = () => {
    setSelect(true);
  };

  const handleMouseLeave = () => {
    setSelect(false);
  };

  return (
    <div
      className={`flex gap-2 pl-3 py-3 ${select && 'bg-[#FFFFFF] rounded-full '}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {select?<img src={img2} className={`object-contain ${select && 'bg-transparent rounded-full '}`} />
      : <img src={img} className={`object-contain ${select && 'bg-transparent rounded-full '}`} />}

      <div className={`${!isOpen && 'opacity-0'} pl-4  text-lg ${select ? 'text-[#001AA1] font-semibold' :'text-[#FFFFFF]'}`}>
        {heading}
      </div>
    </div>
  );
};

export default Buttons;
