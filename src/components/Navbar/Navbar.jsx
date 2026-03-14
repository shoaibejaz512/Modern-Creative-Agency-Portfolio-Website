import gsap from "gsap";
import { Github, Instagram, Linkedin, Twitter, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { delay, motion, transform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navbarContainer = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const tl = useRef(null); // ✅ store timeline here
  const navigate = useNavigate();

  const handleNavbar = () => {
    setShowHeader(false);
    setisOpen(true);
  };

  const handleNavigate = (path) => {
    tl.current.eventCallback("onReverseComplete", () => {
      setShowHeader(true);
      navigate(path); // navigate AFTER animation
    });

    setisOpen(false); // triggers reverse animation
  };

  useEffect(() => {
    // create timeline only once
    tl.current = gsap.timeline({
      paused: true,
      onReverseComplete: () => {
        setShowHeader(true); // show menu after animation finishes
      },
    });

    tl.current.to(
      ".menue",
      {
        opacity: 0,
        display: "none",
        duration: 0.8,
        delay: 0.4,
        ease: "power3.inOut",
      },
      "a",
    );

    tl.current.to(
      navbarContainer.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.5,
        ease: "power2.inOut",
      },
      "a",
    );
    tl.current.to(
      ".close-menue",
      {
        transform: "translateX(0px)",
        duration: 0.3,
        ease: "power1.inOut",
      },
      "-=.5",
    );
    tl.current.to(
      ".logo-nav",
      { opacity: 1, duration: 0.3, ease: "power2.in" },
      "-=.4",
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play(); // ✅ play forward
    } else {
      tl.current.reverse(); // ✅ reverse correctly
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={navbarContainer}
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        className="w-full h-full flex flex-col fixed inset-0 bg-black z-[1000] "
      >
        <div className="top w-full flex justify-between">
          <div className="logo-nav opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="80"
              viewBox="0 0 103 44"
              className="mix-blend-difference"
            >
              <path
                fillRule="evenodd"
                className="mix-blend-difference"
                fill="white"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div className="close-menue transform translate-x-[200px] text-white ">
            <X
              size={100}
              className="cursor-pointer hover:text-[#D3FD50] duration-200"
              onClick={() => setisOpen(false)}
            />
          </div>
        </div>
        <div className="center flex-1  flex justify-center mt-14 items-start ">
          <ul className="w-full">
            <li
              onClick={() => handleNavigate("/")}
              className="w-full cursor-pointer text-[7vw] font-bold uppercase text-center leading-24 border-t-2 border-b-2 border-b-white border-t-white"
            >
              <FlipLink>home</FlipLink>
            </li>

            <li
              onClick={() => handleNavigate("/agence")}
              className="w-full cursor-pointer text-[7vw] text-center font-bold uppercase leading-24 border-t-2 border-t-white"
            >
              <FlipLink>Agence</FlipLink>
            </li>

            <li
              onClick={() => handleNavigate("/project")}
              className="w-full cursor-pointer text-[7vw] font-bold uppercase text-center border-t-2 border-t-white leading-24"
            >
              <FlipLink>Projects</FlipLink>
            </li>

            <li
              onClick={() => handleNavigate("/work")}
              className="w-full cursor-pointer text-[7vw] font-bold uppercase text-center leading-24 border-t-2 border-b-2 border-b-white border-t-white"
            >
              <FlipLink>Work</FlipLink>
            </li>
          </ul>
        </div>
        <div className="bottom w-full flex justify-between flex-1 items-end p-3">
          <div className="author flex  items-center">
            <span className="opacity-80">Owner:</span>
            <h4 className="ml-2 text-[1.2rem] font-extrabold">SHOAIB EJAZ</h4>
          </div>
          <div className="mini-description">
            <p className="font-semibold opacity-90">
              Shoaib Ejaz — A passionate MERN Stack Developer{" "}
            </p>
          </div>
          <div className="social-links flex gap-4">
            <Github
              className="cursor-pointer rounded-full p-2 border-2 border-white"
              size={50}
            />
            <Instagram
              className="cursor-pointer rounded-full p-2 border-2 border-white"
              size={50}
            />
            <Twitter
              className="cursor-pointer rounded-full p-2 border-2 border-white"
              size={50}
            />
            <Linkedin
              className="cursor-pointer rounded-full p-2 border-2 border-white"
              size={50}
            />
          </div>
        </div>
      </div>
      <div
        className={`header  ${showHeader ? "block" : "hidden"} w-full flex justify-between fixed inset-0  h-[60px] z-[1000]`}
      >
        <div className="logo ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="80"
            viewBox="0 0 103 44"
            className="mix-blend-difference"
          >
            <path
              fillRule="evenodd"
              className="mix-blend-difference"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div
          onClick={handleNavbar}
          className="menu flex flex-col cursor-pointer relative group gap-2 w-[300px] bg-black h-[50px] flex justify-center items-start px-3"
        >
          <div className="overlay w-full h-full absolute left-0 top-[-100%] z-[1] group-hover:top-0 group-hover:bg-[#D3FD50] duration-200"></div>
          <span className="w-[120px] h-[4px] bg-white  group-hover:bg-black z-[10] duration-200 inline-block"></span>
          <span className="w-[120px] h-[4px] bg-white group-hover:bg-black z-[10] duration-200 inline-block"></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const DURATION = 0.35;
const STAGGER = 0.025;
const FlipLink = ({ children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: {
                  y: "0%",
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: "0%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};
