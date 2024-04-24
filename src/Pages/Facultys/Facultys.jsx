import React from 'react'
import Faculty_List from '../../components/Faculty_List/Faculty_List'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Control from "../../assets/control.png"
import { useState } from 'react'

const Facultys = () => {
  const[open,setOpen]=useState(false);
  return (
    <div className="row1 [100vw] flex gap-8 ">
    <div className={`${open ? 'w-72 min-w-[250px]' : 'w-18 '} w-auto  h-[auto] relative duration-500`}><Sidebar isOpen={open}/></div>
    <img src={Control} className={`w-8 h-8 absolute top-9 ${open? 'left-[232px]':'left-[40px]'} cursor-pointer ${!open && 'rotate-180'} duration-500`}  onClick={()=>setOpen(!open)}/>
    <div className="flex flex-col w-[100%] overflow-hidden">
    <Header Heading={'Faculty'} isOpen={open}/>
    <hr/>
    <Faculty_List isOpen={open}/>
    </div>
   
    </div>
  )
}

export default Facultys
