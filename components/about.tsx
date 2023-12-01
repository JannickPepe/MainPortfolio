"use client";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/active-section-context";
import { IoAlertOutline } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";


export default function About() {

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const controls = useAnimation();
  
  const [reftwo, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
  }, [controls, inView]);

  const { ref } = useSectionInView("About");

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <motion.div 
    ref={reftwo}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    className="square"
    >
      <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3 text-gray-500 dark:text-gray-400 font-medium">
          <GiDiploma color="#228b22" size={30} className="inline-block mr-2"/>
          After graduating with a Computer Science diploma and PBA degree in Web development and App, I decided to be in internships and freelance in startup. To futher gain more code understanding, I also took various courses full-stack web development.
        </p>

        <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="mb-3 text-gray-500 dark:text-gray-400">
              <span className="text-2xl font-semibold block">My main stacks</span>
              <hr className="mb-2 border-[#002244]"/>
              My core stack is React, Next.js, Node.js, Angular, Express, Firebase and MongoDB. I am also familiar with TypeScript, React Query, Sanity and Prisma. I am always looking to learn new technologies.
            </div>
        
            <div className="mb-3 text-gray-500 dark:text-gray-400">
              <span className="text-2xl font-semibold block">What I enjoy the most</span>
              <hr className="mb-2 border-[#002244]"/>
              My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.
            </div>
        </div>

        <p className="mb-3 text-gray-500 dark:text-gray-400 font-medium">
          <IoAlertOutline color="#B22222" size={30} className="inline-block" /> 
          I am currently looking for a full-time position as a fullstack developer with good UI experince or software / App
        </p>

        <Link
            href="#contact"
            className=" bg-gray-900 max-w-[400px] mx-auto text-white mt-8 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            <div className="mx-auto">
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition inline-block" />
            </div>
          </Link>
      </motion.section>
    </motion.div>
  
  );
}
