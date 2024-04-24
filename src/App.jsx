import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dashboards from './Pages/Dashboards/dashboard'
import Facultys from './Pages/Facultys/Facultys'
import { Route, Routes } from 'react-router-dom';




function App() {

  return (
    <>
   <Routes>
   <Route path='/' element={<Dashboards/>} />
   <Route path='/Dashboard' element={<Dashboards/>} />
   <Route path='/faculty' element={<Facultys/>} />
   </Routes>

    
 
    </>
  )
}

export default App

