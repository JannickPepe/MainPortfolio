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
import Image from "next/image";
import PBA from "@/public/PBA.png";
import Content from "./readMore";
import ShowMore from "./FlyoutLink";
import ShowMoreTwo from "./FlyoutLinkTwo";


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
        className="mb-28 sm:mb-40 max-w-[48rem] text-center leading-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <section id="about" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
          <SectionHeading>About me</SectionHeading>
          <p className=" text-gray-500 dark:text-gray-400 font-medium">
            <GiDiploma color="#228b22" size={30} className="inline-block mr-2"/>
            Jannick Pedersen here, I am a 32 year old fulltime parent and I got finsihed my education summer 2023.
            I have been knowing coding for 7 years of my life now, mainly under education.<br/> In-between my computer science and PBA, I had some time where I took various courses. 
          </p>
          <Content />
          <div className="mt-4 relative overflow-hidden bg-cover bg-no-repeat max-w-sm mx-auto rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
            <Image src={PBA} alt="jannick PBA diploma" className="transition duration-300 ease-in-out hover:scale-125" />
          </div>

          <div className="mt-10 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ShowMore />
            <ShowMoreTwo />
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            <IoAlertOutline color="#B22222" size={30} className="inline-block" /> 
            I am currently looking for a full-time position as a fullstack developer with good UI experince or Software / App
          </p>

          <Link
            href="#contact"
            className="hover:animate-wiggle bg-[rgb(81,156,212)] hover:bg-orange-400 dark:bg-gradient-to-b from-indigo-500 to-purple-800 hover:dark:bg-purple-900 max-w-[400px] mx-auto text-white mt-8 px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            <div className="mx-auto focus:scale-110 hover:scale-110">
              Contact me here{" "}
              <BsArrowRight className="group-hover:translate-x-1 transition inline-block" />
            </div>
          </Link>
        </section>

      </motion.section>
    </motion.div>
  
  );
}
