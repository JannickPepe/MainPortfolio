"use client";

import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/active-section-context";
import { IoAlertOutline } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import Content from "./readMore";
import {MeteorPreview} from "./MeteorsPreview";
import Character from '@/components/Character';
import GitData from '@/components/GitStats/GitData'
import { FaRightLong } from "react-icons/fa6";
import { MdMouse } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";


const paragraph = "I am currently looking for a fulltime position as a fullstack developer, app or software deveveloper. With good UI experince and usage of analytic tools"

function Panel({title, children, isActive, onShow}) {

  return (
    <section className="panel">
      <h3 className="text-2xl font-semibold text-indigo-500">{title}</h3>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow} className="bg-purple-500 px-2 py-1 rounded-lg my-2 flex items-center gap-1 mx-auto">
          Show <TbHandClick />
        </button>
      )}

    </section>
  );

}


export default function About() {

  const [activeIndex, setActiveIndex] = useState(0);

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

  const words = paragraph.split(" ")

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
        className="mb-28 sm:mb-40 max-w-[48rem] text-center leading-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <section id="about" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
          <SectionHeading>About me</SectionHeading>
          <p className=" text-slate-600 dark:text-gray-400 font-medium">
            <GiDiploma color="#228b22" size={30} className="inline-block mr-2"/>
            Jannick Pedersen here, I am a 32 year old fulltime parent and I got finsihed my education summer 2023.
            I have been knowing coding for 7 years of my life now, mainly under education.<br/> In-between my computer science and PBA, I had some time where I took various courses. 
          </p>
          <Content />

          {/*
          <hr className="w-52 lg:mb-8 xl:mb-8 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-purple-700 border-0 rounded my-2 dark:bg-gray-700" />
          */ }
          
          <MeteorPreview />

          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-2"><span className="text-indigo-500">[</span> My <span className="text-purple-500 font-bold">Github</span> Stats <span className="text-purple-500 font-bold">Overview</span> <span className="text-indigo-500">]</span></h2>
            <Panel
            title="Link"
              isActive={activeIndex === 0}
              onShow={() => setActiveIndex(0)}
            >
              <Link className="flex justify-center" href={'https://github.com/JannickPepe'}>
                <span className="mb-2 border-b border-indigo-600 flex items-center gap-1 text-lg hover:text-purple-500">
                  Github Account <FaRightLong size={18} />
                </span>
              </Link>
            
            </Panel>
            <Panel
              title="Github Stats"
              isActive={activeIndex === 1}
              onShow={() => setActiveIndex(1)}
            >
              <GitData />
            </Panel>
          </div>
        
          <IoAlertOutline color="#B22222" size={40} className="relative md:ml-7 lg:ml-0 xl:ml-0 top-[2.5rem] lg:top-[3rem] xl:top-[3rem]" />
          <div className="text-slate-600 dark:text-white px-8 md:ml-10 lg:px-0 lg:ml-10 xl:ml-10 lg:pb-3 xl:px-0 xl:pb-3 text-[20px] lg:text-[36px] xl:text-[36px]">
            <Character paragraph={paragraph} />
          </div>

          <Link
            href="#contact"
            className="background-animate hover:animate-wiggle bg-gradient-to-r from-indigo-500 to-purple-700
            dark:bg-gradient-to-bs hover:dark:bg-purple-900 max-w-[400px] mx-auto text-white font-bold 
            mt-8 px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-105 transition text-lg"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            <div className="mx-auto focus:scale-110 hover:scale-110">
              Contact me here{" "}
              <BsArrowRight size={24} className="group-hover:translate-x-1 transition inline-block" />
            </div>
          </Link>
      
        </section>
      </motion.section>
        
    </motion.div>
  
  );
}
