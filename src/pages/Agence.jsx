import React, { useRef } from "react";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.png";
import img5 from "/images/img5.jpeg";
import img6 from "/images/img6.jpg";
import img7 from "/images/img7.jpg";
import img8 from "/images/img8.png";
import img9 from "/images/img9.jpg";
import img10 from "/images/img10.jpg"
import img11 from "/images/img11.jpg"
import img12 from "/images/img12.jpg"
import img13 from "/images/img13.jpg"
import img14 from "/images/img14.jpg"
import img15 from "/images/img15.jpg"
import img16 from "/images/img16.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Infor from "../components/agence/Infor";
import Teams from "../components/agence/Teams";
import Fall from "../components/Fall";

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {

  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16];



  const imageDiv = useRef(null);

  const inforRef = useRef(null);
useGSAP(() => {
  const imgs = gsap.utils.toArray(".img");

  // Create a timeline for the entire sequence
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger:imageDiv.current, // Trigger from the section
      start: "top 22%",     // Start when the section hits the top
      end: "+=1000",        // How long you want the scroll to last
      scrub: 2,             // Smooth scrubbing
      pin: true,            // Pin the whole section so images swap in place
    }
  });



  // Animate each image one by one
  imgs.forEach((img, i) => {
    tl.to(img, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "none",
      duration: 2 // Relative duration in the timeline
    }); // This offsets each image start time
  });

}, { scope: imageDiv.current });




  return (
    <>
      <div className="secion-1 p-2 relative w-full min-h-screen text-black">
        <div ref={imageDiv} className=" h-75 w-60  overflow-hidden bg-[#2F291D]   absolute rounded-xl top-[13%] left-[30%]  z-[-1]">
          {images.map((img,i) => {
            return(
              <div key={i} style={{clipPath:" polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}}  className="img rounded-xl w-full absolute top-0 left-0 h-full    overflow-hidden" >
              <img src={img}  className="w-full h-full object-cover"/>
              </div>
            )
          })}
        </div>
        <div>
          <div className=" mt-[50vh] ">
           
              <h1 className="title   font-[f2] text-[19vw] uppercase text-center leading-[18vw]">
              Soixan7e <br/>
              Douze
            </h1>
           
          </div>
          <div className="w-full mt-20 flex relative justify-end items-center">
        <Fall delay={.5} color={"#000"} >
             <p className="w-[60%] text-[2vw] font-semibold font-[f1] leading-[2.5vw]">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On reste
              humbles et on dit non aux gros egos, même le vôtre. Une marque est
              vivante. Elle a des valeurs, une personnalité, une histoire. Si on
              oublie ça, on peut faire de bons chiffres à court terme, mais on
              la tue à long terme. C’est pour ça qu’on s’engage à donner de la
              perspective, pour bâtir des marques influentes.
            </p>
          </Fall>
          </div>
        </div>
      </div>
     <div >
       <Infor/>
     <Teams/>
     </div>
    </>
  );
};

export default Agence;
