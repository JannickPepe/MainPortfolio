"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaListUl } from "react-icons/fa";


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
  
  const [openTab, setOpenTab] = React.useState(1);


  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[70rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      <div className="flex flex-wrap dark:text-slate-700">
        <div className="w-full ">
          <ul
            className="flex mb-0 max-w-[400px] list-none flex-wrap pt-3 pb-4 flex-row mx-auto"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-purple-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
                aria-current="page"
              >
                <div className="flex text-base p-1"><FaListUl size={20} className="mr-2 mt-0.5"></FaListUl>Box View</div>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-purple-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="flex text-base p-1"><FaListUl size={20} className="mr-2 mt-0.5"></FaListUl>List View</div>
              </a>
            </li>
          
          </ul>
          <div className="relative flex flex-col w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="relative z-0">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-4">
          <div className="text-center">
            <a className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl 
            sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 
            before:-z-10 before:transition-colors before:duration-500 group" href="#0">
              <span className="relative p-0.5 rounded-full group-hover:bg-slate-800 
              transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 group-hover:before:opacity-100 
              before:absolute before:w-1/2 before:pb-[100%] 
              before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
                <span className="relative whitespace-nowrap">
                  <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
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
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-2 lg:gap-8 xl:gap-8">
                  <div className="">
                  <h1 className="pt-2 sm:pt-5 text-slate-800 font-semibold">Html: <span className=" text-base text-indigo-500">80%</span></h1>
    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
    </div>

    <h1 className="pt-2 sm:pt-5 text-slate-800 font-semibold">TailwindCSS: <span className=" text-base text-indigo-500">70%</span></h1>
    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-red-500 sm:bg-yellow-400 absolute" style={{width:'70%'}}></div>
    </div>
    <h1 className="pt-2 sm:pt-5 text-slate-800 font-semibold">PHP: <span className=" text-base text-indigo-500">60%</span></h1>
    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-green-500 sm:bg-red-500 absolute" style={{width:'60%'}}></div>
    </div>
   
                  </div>
                  <div className="">
                  <h1 className="pt-2 sm:pt-5 text-slate-800 font-semibold">Html: <span className=" text-base text-indigo-500">80%</span></h1>
    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
    </div>

    <h1 className="pt-2 sm:pt-5 text-slate-800 font-semibold">TailwindCSS: <span className=" text-base text-indigo-500">70%</span></h1>
    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-red-500 sm:bg-yellow-400 absolute" style={{width:'70%'}}></div>
    </div>
    <h1 className="pt-2 sm:pt-5 text-slate-800 font-semibold">PHP: <span className=" text-base text-indigo-500">60%</span></h1>
    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] lg:w-96 rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-green-500 sm:bg-red-500 absolute" style={{width:'60%'}}></div>
    </div>
   
                  </div>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </section>
  );
}
