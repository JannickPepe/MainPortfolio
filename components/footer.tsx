
'use client';

import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import  VerticalTabs  from "./VerticalTabs";
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
      ease: "easeOut", 
      duration: 0.5,
      },
  }),
};


export default function Footer() {

  return (
 
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">

      <div className="h-[120px] bg-black flex justify-center items-center">
        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <a href="https://jannickportfolio.netlify.app/" title="Go to 3D Portfolio" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
            3D Portfolio
            <BsArrowRight size={20} className="opacity-70 group-hover:translate-x-1 transition ml-2" />
          </a>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div>
            <div>
              <Image src="https://i.ibb.co/xJmRm7h/jannickogkyle.jpg" width={60} height={60} className="rounded-full inline-block" alt="logo" />
              <span className="text-slate-700 mx-1 font-bold text-2xl relative inline-block stroke-current">
          Jannick Pedersen
          <svg className="absolute -bottom-0.5 w-full max-h-1.5 text-sky-400" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
          </svg>
        </span>
            </div>
            <p className="max-w-md px-1 mt-4 text-sm text-gray-600">
            In 2023 summer i graduated from Roskilde Zealand with a Proffesional Bachelor in the area of fullstack programming and app, I have also a Compuer Science diploma from Roksile Zealand<br/>
            I have mainly done fullstack projects for the past 4 years in ReactJS, NextJS and Angular, where before it was PHP and C#/ASP.net<br/>
            It has both been SQL and NoSQL, depends on the project 
            Various CSS frameworks experience such as, React-Bootstrap, Bootstrap, Tailwind and Ionic5, but also ShadCN for UI components.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-6">
            <div className="">
              <p className="font-medium dark:text-blue-700 text-2xl">
                Sections
              </p>
              <div className="flex flex-col mt-4 space-y-2 text-gray-500 hover:cursor-pointer text-lg">
                <a href="#home" className="hover:opacity-75">Home</a>
                <a href="#about" className="hover:opacity-75">About</a>
                <a href="#projects" className="hover:opacity-75">Projects</a>
                <a href="#skills" className="hover:opacity-75">Skills</a>
                <a href="#experience" className="hover:opacity-75">Experience</a>
              </div>
            </div>
            <div>
              <p className="font-medium dark:text-blue-700 text-2xl">
                Projects
              </p>
              <div className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                <a href="https://nanoscale.up.railway.app/landing" className="hover:opacity-75">NanoScaleSimulations </a>
                <a href="https://next-js-13-e-shop.vercel.app/" className="hover:opacity-75">Orgone Jewels</a>
                <a href="https://jannick-hotel.vercel.app/" className="hover:opacity-75">Hotel Booking</a>
                <a href="https://tmsworld.vercel.app/" className="hover:opacity-75">Tell Me a Story</a>
                <a href="https://udemynextjsserverlessblog.vercel.app/" className="hover:opacity-75">Serverless blog</a>
                <a href="https://jannickservice.netlify.app/" className="hover:opacity-75">SPA Service</a>
              </div>
            </div>
            <div>
              <p className="font-medium dark:text-blue-700 text-2xl">
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
              <hr className="flex-grow border-t border-gray-300" /> 
              <span className="px-3 text-gray-500 text-sm font-semibold"> 
                Disclaimer & Credit
              </span> 
              <hr className="flex-grow border-t border-gray-300" /> 
            </div> 
        <p className="mt-2 text-xs text-gray-800">
          © 2023 Jannick Pedersen
        </p>
        <p className="text-xs mt-2 dark:text-slate-600">
            <span className="font-semibold">About this website:</span> Built with
            React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
            Framer Motion, EmailJS and Vercel hosting.
        </p>
      </div>
    </footer>

  );

}
