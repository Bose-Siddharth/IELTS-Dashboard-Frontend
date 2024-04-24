import React from 'react'
import IELTS from '../../assets/IELTS.png'
import People from "../../assets/people.png"
import Settings from "../../assets/settings.png"
import Dashboard from "../../assets/Dashboard.png"
import add from "../../assets/add.png"
import { useNavigate } from 'react-router-dom'
import Buttons from './Buttons'
import Dashboard2 from "../../assets/Dashboard2.png"
import Faculty2 from "../../assets/Faculty_2.png"

const Sidebar = ({isOpen}) => {
  const role='isAdmin';
  const navigate= useNavigate('');
  return (
    <div className={`${isOpen ?'w-[250px]' : 'w-[60px]'} h-full  bg-[#001AA1]  fixed overflow-hidden `}>
      <div className='w-[80%] mx-auto pt-10 flex flex-col gap-16'>
            <div className='flex gap-5 lg:flex-col md:flex-col xl:flex-col 2xl:flex-row'>
                <img src={IELTS} className={`max-w-[80px] max-h-[80px] ${isOpen ? 'w-[60px] h-[60px]':'w-[40px] h-[40px]'} object-contain`}/>
                <div className={`font-bold text-[#FFFFFF] text-2xl ${!isOpen &&'opacity-0'}`}>IELTS & EduSkills</div>
            </div>
            

            {role==='isAdmin'?
                  <div className='flex flex-col gap-16'>
                 <Buttons heading={'Add Faculty'} img={add} isOpen={isOpen} img2={Dashboard2}/>
                 <Buttons heading={'Dashboard'} img={Dashboard} isOpen={isOpen} img2={Dashboard2}/>
                 <Buttons heading={'Faculty'} img={People} isOpen={isOpen} img2={Faculty2}/>
                <Buttons heading={'Menu Settings'} img={Settings} isOpen={isOpen} img2={Dashboard2}/>
                  </div>
                  :   <div className='flex flex-col gap-16'>
                 {/* <Buttons heading={'Add Faculty'} img={add} isOpen={isOpen}/> */}
                 <Buttons heading={'Dashboard'} img={Dashboard} isOpen={isOpen}/>
                 <Buttons heading={'Faculty'} img={People} isOpen={isOpen}/>
                <Buttons heading={'Menu Settings'} img={Settings} isOpen={isOpen}/>
                  </div>
            }
            
           

            
      </div>
     
    </div>
  )
}

export default Sidebar
