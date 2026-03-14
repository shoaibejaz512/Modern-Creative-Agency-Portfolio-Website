import React from "react";
import img1 from "/images/k1.jpg";
import img2 from "/images/k2.png";
import img3 from "/images/k3.jpg";
import img4 from "/images/k4.jpg";
import img5 from "/images/k5.jpg";
import img6 from "/images/k6.jpg";
import img7 from "/images/k7.jpg";
import img8 from "/images/k8.jpg";
import img9 from "/images/k9.jpg";
import img10 from "/images/k10.jpg";
import img11 from "/images/k11.jpg";
import img12 from "/images/k12.jpg";
import img13 from "/images/k13.jpg";
import img14 from "/images/k14.jpg";
import ProjectsCard from "../components/projects/ProjectsCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const images = [
    {
      image1: img1,
      image2: img2,
    },
    {
      image1: img3,
      image2: img4,
    },
    {
      image1: img5,
      image2: img6,
    },
    {
      image1: img7,
      image2: img8,
    },
    {
      image1: img9,
      image2: img10,
    },
    {
      image1: img11,
      image2: img12,
    },
    {
      image1: img13,
      image2: img14,
    },
  ];

  useGSAP(() => {
    // let tl = gsap.timeline();
    // let projectCard = gsap.utils.toArray(".project-card-section");
    gsap.set(".project-card-section",{
      height:200
    })

    gsap.to(".project-card-section",{
      height:"500px",
      stagger:{
        amount:.3,
        from:"start"
      },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main-container",
          start: "top 70%",
          end: "top -200%",
          scrub: 1,
        },
    })
    // projectCard.forEach((card) => {
    //   tl.from(card, {
    //     height: "500px",
    //     delay:1.5,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: ".main-container",
    //       start: "top 80%",
    //       end: "top -100%",
    //       scrub: 1,
    //       markers: true,
    //     },
    //   });
    // });
  });

  return (
    <div className="w-full min-h-screen ">
      <div className="project-heading mb-2 pt-[20rem] w-full">
        <h1 className="font-[f2] text-[10vw] font-extrabold  text-black">
          PROJECTS <sup className="font-medium -ml-2  ">17</sup>
        </h1>
      </div>
      <div className="main-container -mt-14 sticky">
        {images.map((img, idx) => {
          return (
            <div
              key={idx}
              className="project-card-section origin-bottom  w-full flex gap-3 overflow-hidden px-2 mb-3 "
            >
              <ProjectsCard image1={img.image1} image2={img.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
