// Dashboards.js

import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import Control from '../../assets/control.png';

const Dashboards = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 952) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to toggle isOpen state
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="row1 [100vw] flex gap-8">
      <div className={`${open ? 'w-72 min-w-[250px] duration-500' : 'w-18 duration-500'} w-auto  h-[auto] relative duration-500`}>
        {/* Pass toggleSidebar function as prop */}
        <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />
      </div>
      <img
        src={Control}
        className={`w-8 h-8 fixed ${open ? 'left-[232px] top-12' : 'left-[40px] top-20'} cursor-pointer ${!open && 'rotate-180'} duration-500`}
        onClick={toggleSidebar} // Use toggleSidebar function directly
      />
      <div className="flex flex-col w-[100%] overflow-hidden">
        <Header Heading={'Dashboard'} isOpen={open} />
        <hr />
        <Dashboard isOpen={open} />
      </div>
    </div>
  );
};

export default Dashboards;
