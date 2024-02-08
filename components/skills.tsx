"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[70rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <div className="relative z-0">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-4">
          <div className="text-center">
            <a className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl 
            sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 
            before:-z-10 before:transition-colors before:duration-500 group" href="#0">
              <span className="relative p-0.5 rounded-full bg-slate-200 group-hover:bg-slate-800 
              transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 group-hover:before:opacity-100 
              before:absolute before:w-1/2 before:pb-[100%] 
              before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
                <span className="relative whitespace-nowrap">
                  <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-300 to-purple-600 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 md:mt-8 lg:mt-10">
                      {skillsData.map((skill, index) => (
                        <motion.li
                          className="bg-white borderBlack rounded-xl px-2 py-2 dark:bg-white dark:text-slate-700"
                          key={index}
                          variants={fadeInAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          viewport={{
                            once: true,
                          }}
                          custom={index}
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center 
                  whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity 
                  duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 
                  after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 
                  before:content-['This_is_Jannick_Pedersen,_enjoy_the_ride!'] after:content-['This_is_Jannick_Pedersen,_enjoy_the_ride!'] before:px-2 after:px-2 
                  before:animate-infinite-scroll after:animate-infinite-scroll" aria-hidden="true">
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
