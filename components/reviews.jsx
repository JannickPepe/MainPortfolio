
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { reviewsData } from "@/lib/data";


import thirdcard from "@/public/service.png";
import firstcard from "@/public/nano.png";
import secondcard from "@/public/orgone.png";
import zan from "@/public/zan.jpg";
import kellie from "@/public/kellie.jpg";
import avatar from "@/public/avatar.png";

import { IoMdQuote } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";




export default function Reviews() { 


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

    const { ref } = useSectionInView("Reviews");


    return (
        <motion.div 
        ref={reftwo}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="square"
        >
          <motion.section
              className="max-w-[60rem] text-center leading-8 mb-20 sm:mb-28"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.175 }}
          >
            <section id="reviews" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
              <SectionHeading>Reviews</SectionHeading>
              
              <h2 className="text-2xl text-slate-500">My latest collaborations</h2>
              <div className="grid z-50 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-1 gap-12">
              {reviewsData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-white shadow-xl rounded-lg text-gray-900 hover:scale-110">
                  <div className="relative">
                    <a href="!#">
                      <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-2 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <FaGithub size={30} />
                      </div>
                    </a>
                  </div>
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <Image className="object-cover object-top w-full" height={null} width={null} src={item.imageCover} alt='Cover' />
                  </div>
                  <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                      <Image className="object-cover object-center h-32" height={null} width={null} src={item.imageProfile} alt='Profile' />
                  </div>
                  <div className="text-center mt-2">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-500">CEO: <span className="font-bold text-sky-600">{item.position}</span></p>
                  </div>
                  <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around cursor-pointer">
                    <li className="flex flex-col items-center justify-around bg-slate-300 rounded-full p-2 hover:bg-slate-400">
                      <FaFacebook size={20} color="blue" className="hover:scale-110"/>
                    </li>
                    <li className="flex flex-col items-center justify-between bg-slate-300 rounded-full p-2 hover:bg-slate-400">
                      <FaLinkedin size={20} color="#4169e1" className="hover:scale-110" />
                    </li>
                    <li className="flex flex-col items-center justify-around bg-slate-300 rounded-full p-2 hover:bg-slate-400">
                      <FaYoutube size={20} color="red" className="hover:scale-110" />
                    </li>
                  </ul>
                  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="quote-icon absolute md:left-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-99 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <IoMdQuote size={40} />
                      </span>
                      <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </React.Fragment>
                ))}
              </div>
            </section>
            
          </motion.section>
        </motion.div>

    );

};