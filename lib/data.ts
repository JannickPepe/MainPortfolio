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
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "React-Bootstrap", "MongoDB", "Express", "Node", "Framer Motion"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Orgone Jewels",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "Stripe"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Udemy Course - Serverless Blog",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Sanity", "Tailwind", "Vercel"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Udemy Course - FERN: Service + Live chat",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "React-Bootstrap", "Firebase Cloudstore & Realtime"],
    imageUrl: wordanalyticsImg,
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
