import React from 'react'
import vedio from "/vedio.mp4"
import HomeheroText from './HomeheroText'
import HeroBottomText from './HeroBottomText'

const Vedio = () => {
  return (
    <>
    <div className='w-full h-screen fixed'>
      <video className='w-full h-full object-cover' src={vedio} muted autoPlay loop></video>
    </div>
    <div className="w-full h-screen relative overflow-hidden  flex flex-col justify-between">
      <HomeheroText/>
      <HeroBottomText/>
    </div>
    </>
  )
}

export default Vedio  