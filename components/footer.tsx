import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import  VerticalTabs  from "./VerticalTabs";

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
              <Image src="https://i.ibb.co/xJmRm7h/jannickogkyle.jpg" width={50} height={50} className="rounded-full inline-block" alt="logo" />
              <h3 className="inline-block text-2xl font-semibold px-3 box-decoration-slice bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600 text-white rounded-full ml-2">
                Jannick Pedersen
              </h3>
            </div>
            <p className="max-w-md px-1 mt-4 text-sm text-gray-600">
            In 2023 summer i graduated from Roskilde Zealand with a Proffesional Bachelor in the area of fullstack programming and app, I have also a Compuer Science diploma from Roksile Zealand<br/>
            I have mainly done fullstack projects for the past 4 years in ReactJS, NextJS and Angular, where before it was PHP and C#/ASP.net<br/>
            It has both been SQL and NoSQL, depends on the project 
            Various CSS frameworks experience such as, React-Bootstrap, Bootstrap, Tailwind and Ionic5, but also ShadCN for UI components.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Twitter </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> GitHub </span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 lg:ml-6">
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
                <VerticalTabs />
              </div>
            </div>
          
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          © 2023 Jannick Pedersen
        </p>
        <p className="text-xs mt-2 dark:text-slate-600">
            <span className="font-semibold">About this website:</span> built with
            React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
            Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </div>
    </footer>

  );

}
