import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Techincal School - Web Integrator PHP",
    location: "Roskilde, Denmark",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 summer - 2016 january",
  },
  {
    title: "Computer Science Diploma",
    location: "Roskilde, Denmark",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 januray - 2021 summer",
  },
  {
    title: "Proffesional Bachelor in Fullstack (Web) & App",
    location: "Roskide, Denmark",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023 summer",
  },
  {
    title: "PBA Internship - NanoScaleSimulations",
    location: "Roskide, Denmark",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 january - 2023 summer",
  },
  {
    title: "Freelance Fullstack - Orgone Jewels",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 august - 2023 november",
  },
] as const;

export const projectsData = [
  {
    title: "NanoScaleSimulations",
    description:
      "I worked as a full-stack developer on this startup project for 7 months. Started from designing a Figma Prototype, to build up the NodeJS and Express server and production, build responsive design. Then next step was to make curtain pages and sections dynamic with the data, so the product owners could manage the data by themselves. Email and subscribe also got setup along with data visulazation in the admin panel.",
    tags: ["React", "React-Bootstrap", "MongoDB", "Express", "Node", "Framer Motion"],
    imageUrl: corpcommentImg,
    url_link: "https://nanoscale.up.railway.app/landing",
  },
  {
    title: "Orgone Jewels",
    description:
      "A NextJS13 fullstack project, where an e-shop needed to be devevloped after a product owners demand (so far). Where the CSS framework is TailwindCSS with the usage of React-Observer and Framer Motion, also creating the collections in Prisma. Stripe is set in test mode and works.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind", "Prisma", "Stripe"],
    imageUrl: rmtdevImg,
    url_link: "https://next-js-13-e-shop.vercel.app/",
  },
  {
    title: "Udemy Course - Serverless Blog",
    description:
      "A serverless blog, where I use Sanity CMS to create blogs. It got light and dark mode and various filter options.",
    tags: ["React.js", "Next.js", "Sanity", "CSS", "Vercel"],
    imageUrl: wordanalyticsImg,
    url_link: "https://udemynextjsserverlessblog.vercel.app/",
  },
  {
    title: "Udemy Course - FERN: Service + Live chat",
    description:
      "An SPA service project, where you can create a user, then either enroll in classes or make classes. Where you can CRUD with title, desc, price ect. Also student can send class request and the teacher can accept and thereafter live chat together with another request it",
    tags: ["React", "React-Bootstrap", "Firebase Cloudstore & Realtime"],
    imageUrl: wordanalyticsImg,
    url_link: "https://jannickservice.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Figma",
  "Angular",
  "Framer Motion",
  "PHP",
  "C# / ASP.NET"
] as const;
