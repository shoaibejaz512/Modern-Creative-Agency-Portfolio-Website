import React from 'react'
import { Link } from 'react-router-dom'

const HeroBottomText = () => {
  return (
    <div className='font-[f2] absolute left-0 bottom-[-1px] w-full flex justify-center items-center gap-3  text-white'>
      <Link to={"/project"} className='text-[4.5vw] leading-[5rem] pt-2 w-[35vw] text-center font-extrabold px-[40px] hover:border-[#D3FD50] hover:text-[#D3FD50] duration-200 rounded-full  border border-5 border-white'>PROJECTS</Link>
      <Link to={"/agence"} className='text-[4.5vw] leading-[5rem] pt-2 w-[35vw] text-center font-extrabold px-[40px] hover:border-[#D3FD50] hover:text-[#D3FD50] duration-200 rounded-full  border border-5 border-white'>AGENCE</Link>
    </div>
  )
}

export default HeroBottomText