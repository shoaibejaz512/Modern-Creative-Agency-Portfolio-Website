import React, { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img8 from "/images/img8.png";
import img6 from "/images/img6.jpg";
import img11 from "/images/img11.jpg";
import img14 from "/images/img14.jpg";
import img15 from "/images/img15.jpg";
import img16 from "/images/img16.jpg";

gsap.registerPlugin(ScrollTrigger);

const TeamOne = () => {
  const images = [img2, img3, img8, img6, img11, img14, img15, img16];

  const container = useRef(null);
  const teamRef = useRef(null);
  const imagRef = useRef(null);

  // 1. Create a persistent reference for the audio object
  const audioRef = useRef(null);

  useEffect(() => {
    // 2. Initialize the audio only once
    audioRef.current = new Audio("/sounds/click.mp3");
    audioRef.current.volume = 1;
  }, []);

  useGSAP(
    () => {
      // Select all cards inside the container
      const cards = gsap.utils.toArray(".card");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top", // Starts when the top of the container hits the top of the viewport
          end: "+=200%", // Lasts for 300% of the viewport height
          pin: true, // Pins the container
          scrub: 1, // Smooth scrubbing
        },
      });

      tl.to(
        ".behind-overlay",
        {
          opacity: 1,
          duration: 1.4,
          ease: "power3.inOut",
        },
        "-=0.5",
      ); // Start fading in the overlay slightly before the cards start animating

      // Example animation: Fade cards in/out as you scroll
      cards.forEach((card, i) => {
        if (i !== -1) {
          tl.from(
            card,
            {
              yPercent: 100,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "-=0.5",
          ); // Overlap animations slightly
          tl.to(card, {
            // scale:.9,
            scale: 0.65,
            y: i * 12,
            rotateZ: i % 2 === 0 ? -15 : 15,
            duration: 1.8,
            ease: "power2.inOut",
          });
        }
      });
    },
    { scope: container },
  );

  const handleMouseLeave = () => {
    gsap.to(teamRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMovementOfContainer = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 3 - 1; // Normalize to [-1, 1]
    const y = (clientY / innerHeight) * 2 - 1; // Normalize to [-1, 1]
    gsap.to(teamRef.current, {
      x: x * 30, // Adjust the multiplier for more/less movement
      y: y * 20,
      duration: .5,
      ease: "power1.out",
    });
  };

  // 3. Create a helper function to play the sound
  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start so it can replay fast
      audioRef.current.play().catch(() => {
        /* Browsers sometimes block audio until the first click */
      });
    }
    document.querySelectorAll(".list-1").forEach((currList, i) => {
      currList.addEventListener("mouseenter", () => {
        if (imagRef.current) {
          imagRef.current.src = images[i];
        }
      });
    });
  };

  return (
   <>
    <div ref={container} className="relative w-full   overflow-hidden">
      {/* Container for the cards */}
      <div className="card-container  relative w-full h-screen">
        <div className="behind-overlay absolute inset-0 w-full h-full  bg-black opacity-0"></div>

        {/* Card 1 */}
        <div className="card absolute inset-0 w-full h-full flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img2}
              className="w-full h-full object-cover"
              alt="Team 1"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img3}
              className="w-full h-full object-cover"
              alt="Team 2"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img8}
              className="w-full h-full object-cover"
              alt="Team 3"
            />
          </div>
        </div>
        {/* Card 4 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img6}
              className="w-full h-full object-cover"
              alt="Team 3"
            />
          </div>
        </div>
        {/* Card 5 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img11}
              className="w-full h-full object-cover"
              alt="Team 3"
            />
          </div>
        </div>
        {/* Card 6 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img14}
              className="w-full h-full object-cover"
              alt="Team 3"
            />
          </div>
        </div>
        {/* Card 7 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img15}
              className="w-full h-full object-cover"
              alt="Team 3"
            />
          </div>
        </div>
        {/* Card 8 */}
        <div className="card absolute inset-0 w-full h-full  flex justify-center items-center">
          <div className="w-1/3 h-full rounded-2xl overflow-hidden">
            <img
              src={img16}
              className="w-full h-full object-cover"
              alt="Team 3"
            />
          </div>
        </div>
      </div>
    </div>
    
      {/* Spacer to see the scroll effect */}
      <div
        onMouseMove={handleMovementOfContainer}
        className="w-full h-screen bg-black relative mt-0 relative"
      >
        <div
          ref={teamRef}
          className="img-show-section w-[25%] h-[70%] absolute top-1/9 left-1/2 rounded-2xl overflow-hidden z-[10] pointer-events-none"
        >
          <img
            src={img11}
            ref={imagRef}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              Shoaib Rahi
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              carl godbout
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              cammel brarier
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              Hélène Conti
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              Maëlle Jacot-Descombes
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              Isabelle Beauchemin
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   overflow-hidden cursor-pointer  flex justify-between items-center px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95">
              Olivier Duclos
            </h1>
          </div>
          <div className="right-role w-1/2 h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[1.05re group-hover:text-black duration-200m] uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="list-1 group relative w-full h-1/9   flex overflow-hidden justify-between items-center cursor-pointer px-5 border-b-2 border-t-2 border-white py-2"
        >
          <div className="overlay group-hover:top-0 duration-300 absolute w-full h-full top-[-100%] left-0 bg-[#D3FD50]"></div>
          <div className="left-teamName ">
            <h1 className="font-extrabold group-hover:text-black duration-200 text-[2.5vw] uppercase opacity-95 ">
              Chantal gobeil
            </h1>
          </div>
          <div className="right-role w-1/2  h-full flex justify-end ">
            <p className="text-white opacity-90 font-extrabold text-[.8rem] group-hover:text-black duration-200 uppercase">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
   </>
  );
};

export default TeamOne;
