import React, { useRef } from "react";
import img17 from "/images/img17.jpg";
import img18 from "/images/img18.jpg";
import img19 from "/images/img19.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

const TeamTwo = () => {
  const mainImgContainerRef = useRef();
useGSAP(() => {

  const sections = gsap.utils.toArray(".section-1");

  // Set initial positions
  gsap.set(sections, {
    yPercent: 100,
  });

  // First section should be visible
  gsap.set(sections[0], {
    yPercent: 0
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mainImgContainerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * sections.length}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: true
    }
  });

  // Animate sections one by one
  sections.forEach((section, index) => {
    if (index !== 0) {
      tl.to(section, {
        yPercent: 0,
        y:index * 100,
        duration: 1,
        ease: "none"
      });
    }
  });

}, { scope: mainImgContainerRef });
  return (
    <>
      {/* -------------------------another animation-------------------- */}
      <div
        ref={mainImgContainerRef}
        className="w-full h-screen bg-black   relative"
      >
        <section className="section-1 absolute  inset-0 w-full h-screen">
          <div className="main-img w-full relative h-full cursor-pointer group rounded-tl-[80px] rounded-tr-[80px] overflow-hidden">
            <img
              src={img17}
              className="w-full group-hover:scale-[1.2] duration-300 h-full object-cover"
            />
            <div className="overlay absolute inset-0 duration-200  group-hover:bg-black/30 w-full h-full"></div>
          </div>
          <div className="content pointer-events-none absolute top-[50%] left-[50%] -translate-x-[50%] py-5 -translate-y-[50%] w-full h-full flex flex-col justify-start items-center text-center text-white">
            <div className="top w-full">
              <span className="text-[1.8rem] font-bold ">
                VIOR TOUR LES PROJECTS
              </span>
            </div>
            <div className="center w-full h-full flex flex-col justify-center items-center">
              <span className="text-[1.5rem] font-extrabold">OPTO RESCUE</span>
              <p className="text-[4rem] font-semibold ">
                ON VIOUS VOIT COMME PERONNNES
              </p>
            </div>
          </div>
        </section>
        <section className="section-1 absolute inset-0  w-full h-screen">
          <div className="main-img w-full relative h-full cursor-pointer group rounded-tl-[80px] rounded-tr-[80px] overflow-hidden">
            <img
              src={img19}
              className="w-full group-hover:scale-[1.2] duration-300 h-full object-cover"
            />
            <div className="overlay absolute inset-0 duration-200  group-hover:bg-black/30 w-full h-full"></div>
          </div>
          <div className="content pointer-events-none absolute top-[50%] left-[50%] -translate-x-[50%] py-5 -translate-y-[50%] w-full h-full flex flex-col justify-start items-center text-center text-white">
            <div className="top w-full">
              <span className="text-[1.8rem] font-bold ">
                VIOR TOUR LES PROJECTS
              </span>
            </div>
            <div className="center w-full h-full flex flex-col justify-center items-center">
              <span className="text-[1.5rem] font-extrabold">OPTO RESCUE</span>
              <p className="text-[4rem] font-semibold ">
                ON VIOUS VOIT COMME PERONNNES
              </p>
            </div>
          </div>
        </section>
        <section className="section-1 absolute inset-0 w-full h-screen">
          <div className="main-img w-full relative h-full cursor-pointer group rounded-tl-[80px] rounded-tr-[80px] overflow-hidden">
            <img
              src={img18}
              className="w-full group-hover:scale-[1.2] duration-300 h-full object-cover"
            />
            <div className="overlay absolute inset-0 duration-200  group-hover:bg-black/30 w-full h-full"></div>
          </div>
          <div className="content pointer-events-none absolute top-[50%] left-[50%] -translate-x-[50%] py-5 -translate-y-[50%] w-full h-full flex flex-col justify-start items-center text-center text-white">
            <div className="top w-full">
              <span className="text-[1.8rem] font-bold ">
                VIOR TOUR LES PROJECTS
              </span>
            </div>
            <div className="center w-full h-full flex flex-col justify-center items-center">
              <span className="text-[1.5rem] font-extrabold">OPTO RESCUE</span>
              <p className="text-[4rem] font-semibold ">
                ON VIOUS VOIT COMME PERONNNES
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamTwo;
