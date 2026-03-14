import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <div className='text-white relative'>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/agence"} element={<Agence/>}/>
        <Route path={"/project"} element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App