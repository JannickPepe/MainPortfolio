
'use client';

import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import  VerticalTabs  from "./VerticalTabs";
import { motion } from "framer-motion";
import { GridHoverFooter } from "./GridHoverBtn";
import FooterCV from "./FooterCV";


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
      ease: "easeOut", 
      duration: 0.5,
      },
  }),
};


export default function Footer() {

  return (

    <footer className="bg-gradient-to-r from-sky-200 to-gray-300 dark:bg-gradient-to-r dark:from-indigo-500 dark:to-sky-600">

      <div className="relative">
        <GridHoverFooter />
      </div>
      

      <div className="px-4 py-10 mx-auto sm:px-6 lg:px-16 z-50">
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div>
            <div>
              <Image src="https://i.ibb.co/xJmRm7h/jannickogkyle.jpg" width={60} height={60} className="rounded-full inline-block" alt="logo" />
              <span className="text-slate-700 mx-2 font-bold text-2xl relative inline-block stroke-current dark:text-slate-950">
                Jannick Pedersen
                <svg className="absolute -bottom-0.5 w-full max-h-1.5 text-sky-400 dark:text-indigo-700" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                </svg>
              </span>
            </div>
            <p className="max-w-md px-1 mt-4 text-sm text-gray-600 dark:text-slate-800 font-semibold">
            In 2023 summer i graduated from Roskilde Zealand with a Proffesional Bachelor in the area of fullstack programming and app, I have also a Compuer Science diploma from Roksile Zealand<br/>
            I have mainly done fullstack projects for the past 4 years in ReactJS, NextJS and Angular, where before it was PHP and C#/ASP.net<br/>
            </p>
            <FooterCV />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-6">
            <div className="">
              <p className="font-medium text-2xl dark:text-slate-950">
                Sections
              </p>
              <div className="flex flex-col mt-4 space-y-2 text-gray-500 hover:cursor-pointer lg:text-lg dark:text-slate-800 lg:font-medium">
                <a href="#home" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Home</a>
                <a href="#about" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">About</a>
                <a href="#projects" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Projects</a>
                <a href="#skills" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Skills</a>
                <a href="#experience" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Experience</a>
                <a href="#reviews" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Reviews</a>
                <a href="#contact" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Contact</a>
              </div>
            </div>
            <div>
              <p className="font-medium dark:text-slate-950 text-2xl">
                Projects
              </p>
              <div className="flex flex-col mt-4 space-y-2 lg:text-lg text-gray-500 dark:text-slate-800 lg:font-medium">
                <a href="https://nanoscale.up.railway.app/landing" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">NanoScaleSimulations </a>
                <a href="https://next-js-13-e-shop.vercel.app/" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Orgone Jewels</a>
                <a href="https://jannick-hotel.vercel.app/" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Hotel Booking</a>
                <a href="https://tmsworld.vercel.app/" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">Tell Me a Story</a>
                <a href="https://udemynextjsserverlessblog.vercel.app/" className="hover:opacity-7 hover:text-sky-6005 hover:dark:text-slate-300">Serverless blog</a>
                <a href="https://jannickservice.netlify.app/" className="hover:opacity-75 hover:text-sky-600 hover:dark:text-slate-300">SPA Service</a>
              </div>
            </div>
            <div>
              <p className="font-medium dark:text-slate-950 text-2xl">
                Udemy Diplomas
              </p>
              <div className="flex flex-col mt-4 text-gray-500 text-lg">
                <motion.div
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: false,
                  }}
                                      
                >
                  <VerticalTabs />
                </motion.div>
              </div>
            </div>
          
          </div>
        </div>
        <div className="flex items-center mt-2 lg:mt-6 xl:mt-6 max-w-[440px]"> 
              <hr className="flex-grow border-t border-gray-400" /> 
              <span className="px-3 text-sm font-semibold dark:text-gray-400"> 
                Disclaimer & Credit
              </span> 
              <hr className="flex-grow border-t border-gray-400" /> 
            </div> 
        <p className="mt-2 text-sm text-gray-800 dark:text-slate-800 font-medium">
          <span className="text-slate-800 font-bold">©</span> 2024 Jannick Pedersen
        </p>
        <p className="text-sm mt-2 dark:text-slate-800 font-medium">
            <span className="font-semibold">About this website:</span> Built with
            React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
            Framer Motion, EmailJS and Vercel hosting.
        </p>
      </div>
    </footer>

  );

}
