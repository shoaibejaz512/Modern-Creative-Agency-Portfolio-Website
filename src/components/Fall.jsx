import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText,ScrollTrigger);

const Fall = ({ children, delay = .01, color = "black" }) => {
  const elementRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let gsapContext = gsap.context(() => {
      let colorBoxes = [];
      let split = new SplitText(textRef.current, { type: "words" });
      let word = split.words;

      colorBoxes = word.map((word, i) => {
        gsap.set(word, {
          display: "inline-block",
          position: "relative",
        });

        const wordRect = word.getBoundingClientRect();
        const colorBox = document.createElement("div");
        colorBox.style.position = "absolute";
        colorBox.style.left = "0%";
        colorBox.style.top = "0";
        colorBox.style.zIndex = "10";
        colorBox.style.width = `${wordRect.width * 2}px`;
        colorBox.style.height = `${wordRect.height * 1.2}px`;
        colorBox.style.backgroundColor = color;
        colorBox.style.borderRadius = ".5vw";
        colorBox.style.pointerEvents = "none";
        word.appendChild(colorBox);
        return colorBox;
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: delay,
        onComplete: () => {
          colorBoxes.forEach((box) => {
            box.style.display = "none";
          });
        },
      });
      tl.to(colorBoxes, {
        y: () => gsap.utils.random(1200, 600),
        x: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-360, 360),
        duration: 1,
        ease: "power2.in",
        stagger: 0.02,
      });
    },elementRef);

    return () => gsapContext.revert();
  }, [delay]);

  return (
    <div ref={elementRef}>
      <div ref={textRef} className="w-full flex justify-end">{children}</div>
    </div>
  );
};

export default Fall;
