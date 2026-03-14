import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Infor = () => {
  //all reference element
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Use the SplitText plugin you've already imported
      const split = new SplitText(titleRef.current, {
        type: "chars, words",
        mask: "words",
      });
      const splitAllList = new SplitText("li", {
        type: "chars, words",
        mask: "words",
      });
      const splitAllParas = new SplitText("p", {
        type: "chars, words,lines",
        mask: "lines",
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 40%", // Starts when title is 80% down the viewport
          end: "top 20%",
          scrub: 2,
        },
      });

      // 2. Set the initial state (hidden and pushed down)
      // We target the 'chars' for a smooth staggered effect
      gsap.set(split.words, { y: 35, opacity: 0 });
      gsap.set(splitAllList.words, { y: 35, opacity: 0 });
      gsap.set(splitAllParas.lines, { y: 35, opacity: 0 });

      // 3. Use gsap.to to bring them back to their natural position (0)
      tl.to(
        split.words,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.in",
        },
        "a",
      ).to(
        splitAllList.words,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.in",
        },
        "a",
      ).to(splitAllParas.lines,{
        y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.in",
      },"a");

      // Cleanup to prevent memory leaks/double splitting
      return () => split.revert();
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="section-2 h-screen w-full flex text-black  font-[f1] px-32 flex-col justify-center items-center  mt-52"
    >
      <div className="top  w-full h-[80%] flex mt-16">
        <div className="title w-1/3 h-1/2  ">
          <h1
            ref={titleRef}
            className="text-black  text-[1.5rem] font-extrabold "
          >
            Expertise
          </h1>
        </div>
        <div className="list w-1/3 h-1/2 ">
          <ul>
            <li className="decoration-none font-extrabold leading-6 text-[1.2rem]">
              Stratégie
            </li>
            <li className="decoration-none font-extrabold leading-6 text-[1.2rem]">
              Publicité
            </li>
            <li className="decoration-none font-extrabold leading-6 text-[1.2rem]">
              Branding
            </li>
            <li className="decoration-none font-extrabold leading-6 text-[1.2rem]">
              Contenu
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom  w-full h-[80%] flex gap-14 -mt-28">
        <div className="para-1 w-1/2 h-1/2 ">
          <p className="font-bold leading-5">
            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
            et vivent grâce à la créativité sous toutes ses formes.
          </p>
        </div>
        <div className="para-2 w-1/2 h-1/2 ">
          <p className="font-bold leading-5">
            Notre création_ bouillonne dans un environnement où le talent a le
            goût d’exploser. Où on se sent libre d’être la meilleure version de
            soi-même.
          </p>
        </div>
        <div className="para-3 w-1/2 h-1/2 ">
          <p className="font-bold leading-5">
            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
            participe à bâtir une agence dont on est fiers.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infor;
