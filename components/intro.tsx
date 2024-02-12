"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa"
import { FaMeta, FaLinkedin, FaDiscord } from "react-icons/fa6";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[58rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://i.ibb.co/xJmRm7h/jannickogkyle.jpg"
              alt="Jannick pedersen"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="animate-waving-hand hover:animate-hover-waving-hand absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jannick Pedersen,</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience.{" "}
        <span className="text-indigo-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
          Graduated
          <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
          </svg>
        </span>
        with a <span className="font-bold">PBA</span> from Roskilde Zealand.<br/>
        <span className="italic"> I develop sites & apps with focus on UI and analytics </span>.<br/> 
        <span className="text-indigo-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
        Lately: {" "}
          <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
          </svg>
        </span>
        <span className="italic">React (Next.js), Angular, NoSQL, SQL & PHP</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link
          href="https://jannickportfolio.netlify.app/"
          className=" group bg-blue-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now());
          }}
        >
          3D Portfolio Site{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <Link target="_blank" href='https://github.com/JannickPepe'>
            <IconButton text="Github" color="bg-gradient-to-r from-indigo-500 to-purple-700">
              <FaGithub size={30} />
            </IconButton>
          </Link>
          <Link target="_blank" href='https://www.facebook.com/' >
            <IconButton text="Meta" color="bg-gradient-to-r from-indigo-500 to-purple-700" >
              <FaMeta size={30} />
            </IconButton>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/jannick-pedersen-3b8a36119">
            <IconButton text="LinkedIn" color="bg-gradient-to-r from-indigo-500 to-purple-700">
              <FaLinkedin size={30} />
            </IconButton>
          </Link>
          <Link target="_blank" href='https://discord.com/invite/WGqJ2CZebb'>
            <IconButton text="Discord" color="bg-gradient-to-r from-indigo-500 to-purple-700">
              <FaDiscord size={30} />
            </IconButton>
          </Link>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
      </motion.div>
    </section>
  );
}
