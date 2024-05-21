"use client";

import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { GiDiploma } from "react-icons/gi";
import Content from "./readMore";
import {MeteorPreview} from "./MeteorsPreview";
import GitData from '@/components/GitStats/GitData'
import { FaRightLong } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";




function Panel({title, children, isActive, onShow} : {title:any, children:any, isActive:boolean, onShow:any }) {

  return (
    <section className="panel">
      <h3 className="text-lg font-bold text-indigo-500">{title}</h3>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow} className="ring ring-purple-600 px-2 py-1 rounded-lg my-2 flex items-center gap-1 mx-auto hover:ring-transparent hover:scale-105 group">
          Show <TbHandClick className="group-hover:animate-wiggle" />
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
          
          <MeteorPreview />

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-3"><span className="text-indigo-500">[</span> My <span className="text-purple-500 font-bold">Github Stats </span> 
            Overview <span className="text-indigo-500">]</span></h2>
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
        
        </section>
      </motion.section>
        
    </motion.div>
  
  );
}
