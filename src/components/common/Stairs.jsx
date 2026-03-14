import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stairs = ({children}) => {

    
    
  const container = useRef(null);
  const locate = useLocation();
  const webRef = useRef(null);
  console.log(locate)
    
  useGSAP(() => {
    let tl = gsap.timeline({
      onStart:() => {
        container.current.style.display = "block"
      }
    });
  tl.from(".stair",{
    height:0,
    duration:.8,
    ease:"expo.inOut",
    stagger:{
      amount:.25,
      from:"end"
    }
  })

  tl.to(".stair",{
    y:"100%",
    duration:.6,
    ease:"expo.inOut",
    stagger:{
      amount:.25,
      from:"end"
    },
    onComplete:() => {
      container.current.style.display = "none";
    }
  })
  tl.to(".stair",{
     y:0,
  })
  gsap.from(webRef.current,{
    opacity:0,
    delay:1.5,
    duration:.8
  })
  },[locate.pathname])

 


  return (
   <>
    <div ref={container} className='w-full h-screen fixed inset-0 z-[100]'>
        <div  className='w-full h-full flex '>
        <div className='stair w-1/6 h-full bg-black'></div>
        <div className='stair w-1/6 h-full bg-black'></div>
        <div className='stair w-1/6 h-full bg-black'></div>
        <div className='stair w-1/6 h-full bg-black'></div>
        <div className='stair w-1/6 h-full bg-black'></div>
        <div className='stair w-1/6 h-full bg-black'></div>
      </div>
    </div>
    <div ref={webRef}>
      {children}
    </div>
   </>
  )
}

export default Stairs