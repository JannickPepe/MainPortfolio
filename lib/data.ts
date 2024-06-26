import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import nanoImg from "@/public/nano.png";
import orgoneImg from "@/public/orgone.png";
import serviceImg from "@/public/service.png";
import serverlessblogImg from "@/public/serverlessblog.png";
import thirdcard from "@/public/service.png";
import firstcard from "@/public/nano.png";
import secondcard from "@/public/orgone.png";
import zan from "@/public/zan.jpg";
import kellie from "@/public/kellie.jpg";
import avatar from "@/public/avatar.png";
import linkedinHotel from "@/public/linkedin-hotel.png";
import linkedinTMS from "@/public/linkedin-tms.png";

import AdventureBook from "@/public/AdventureBook.png";
import JobList from "@/public/JobList.png";
import Valyrion from "@/public/Valyrion.png";
import NanoScience from "@/public/NanoScience.png";
import FutureScience from "@/public/FutureScience.png";
import Jphone from "@/public/Jphone.png";
import SupabaseUploader from "@/public/SupabaseUploader.png";
import SupabaseSass from "@/public/SupabaseSass.png";
import StartUp from "@/public/StartUp.png";
import BrandingSite from "@/public/BrandingSite.png";
import JSBranding from "@/public/JSBrand.png";


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
    name: "Reviews",
    hash: "#reviews"
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
    title: "Trekroner Housing-Union Internship",
    location: "Roskilde, Denmark",
    description:
      "I was working as an intern for the last semeter of my computer science. Where i was going to build a Wordpress site for Trekroner Housing-Union. With booking system, calendar system and event overview. As well for contact form and responsive design. Using Elementor, classic editor for custom coding and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2021, January-May",
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

export const projectsDataFullstack = [
  {
    title: "MERN: JobList",
    description:
      "An SPA service project, where you can create a user, then either enroll in classes or make classes. Where you can CRUD with title, desc, price ect. Also student can send class request and the teacher can accept and thereafter live chat together with another request it",
    tags: ["React", "React-Bootstrap", "Firebase Cloudstore & Realtime"],
    imageUrl: JobList,
    url_link: "https://joblist.up.railway.app/",
  },
  {
    title: "MERN: Valyrion",
    description:
      "An SPA service project, where you can create a user, then either enroll in classes or make classes. Where you can CRUD with title, desc, price ect. Also student can send class request and the teacher can accept and thereafter live chat together with another request it",
    tags: ["React", "React-Bootstrap", "Firebase Cloudstore & Realtime"],
    imageUrl: Valyrion,
    url_link: "https://valyrion.up.railway.app/",
  },
  {
    title: "Hotel Booking",
    description:
      "A FullStack Hotel Booking Web App in Next.js 14, React, Typescript, Shadcn, Clerk, My SQL (planetscale), Zustand, Stripe. You can create a user with Clerk if you want to 'rent' a room or add your own hotel and rooms. The date picker cannot overlap a current booked room and the filter list can only show states / ciites if there is any in the selected country. ",
    tags: ["Next.js", "TailwindCSS", "PlanetScale", "Stripe", "Zustand", "Prisma"],
    imageUrl: linkedinHotel,
    url_link: "https://jannick-hotel.vercel.app/",
  },
  {
    title: "NanoScaleSimulations",
    description:
      "I worked as a full-stack developer on this startup project for 7 months. Started from designing a Figma Prototype, to build up the NodeJS and Express server with client. Next step was to make sure every page is responsive and setup analytics with GA4 and PostHog, along with EmailJS. Having visualize data as well in the admin panel.",
    tags: ["React", "React-Bootstrap", "MongoDB", "Express", "Node", "Framer Motion"],
    imageUrl: nanoImg,
    url_link: "https://nanoscalesimulations.com",
  },
  {
    title: "Orgone Jewels",
    description:
      "A NextJS13 fullstack project, where an e-shop needed to be devevloped after a product owners demand (so far). Where the CSS framework is TailwindCSS with the usage of React-Observer and Framer Motion, also creating the collections in Prisma. Stripe is set in test mode and works.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind", "Prisma", "Stripe"],
    imageUrl: orgoneImg,
    url_link: "https://next-js-13-e-shop.vercel.app/",
  },
  {
    title: "Tell Me a Story",
    description:
      "A FullStack MERN NextJS14 Threads App with React, Next JS, TypeScript, MongoDB with usage of ShadCN UI with CSS framework Tailwind. It has also server side rendering and MongoDB handling with schemas. Multiple data population, responsive layouts with TailwindCSS, Clerk for authentication, handle file uploads with UploadThing, validate data with Zod and manage forms with react hook form",
    tags: ["ShadCN", "Next.js", "Typescript", "Clerk", "Zod Validation"],
    imageUrl: linkedinTMS,
    url_link: "https://tmsworld.vercel.app/",
  },
  {
    title: "Udemy Course - Serverless Blog",
    description:
      "A serverless blog, where I use Sanity CMS to create blogs. It got light and dark mode and various filter options.",
    tags: ["React.js", "Next.js", "Sanity", "CSS", "Vercel"],
    imageUrl: serverlessblogImg,
    url_link: "https://udemynextjsserverlessblog.vercel.app/",
  },
  {
    title: "Udemy Course - FERN: Service + Live chat",
    description:
      "An SPA service project, where you can create a user, then either enroll in classes or make classes. Where you can CRUD with title, desc, price ect. Also student can send class request and the teacher can accept and thereafter live chat together with another request it",
    tags: ["React", "React-Bootstrap", "Firebase Cloudstore & Realtime"],
    imageUrl: serviceImg,
    url_link: "https://jannickservice.netlify.app/",
  },
] as const;

export const projectsDataSPA = [
  {
    title: "Nano Scienece",
    description:
      "A FullStack Hotel Booking Web App in Next.js 14, React, Typescript, Shadcn, Clerk, My SQL (planetscale), Zustand, Stripe. You can create a user with Clerk if you want to 'rent' a room or add your own hotel and rooms. The date picker cannot overlap a current booked room and the filter list can only show states / ciites if there is any in the selected country. ",
    tags: ["Next.js", "TailwindCSS", "PlanetScale", "Stripe", "Zustand", "Prisma"],
    imageUrl: NanoScience,
    url_link: "https://nanoscience.up.railway.app/",
  },
  {
    title: "Future Science",
    description:
      "I worked as a full-stack developer on this startup project for 7 months. Started from designing a Figma Prototype, to build up the NodeJS and Express server with client. Next step was to make sure every page is responsive and setup analytics with GA4 and PostHog, along with EmailJS. Having visualize data as well in the admin panel.",
    tags: ["React", "React-Bootstrap", "MongoDB", "Express", "Node", "Framer Motion"],
    imageUrl: FutureScience,
    url_link: "https://future-science.vercel.app/",
  },
  {
    title: "Aceternity UI with Sentry",
    description:
      "I worked as a full-stack developer on this startup project for 7 months. Started from designing a Figma Prototype, to build up the NodeJS and Express server with client. Next step was to make sure every page is responsive and setup analytics with GA4 and PostHog, along with EmailJS. Having visualize data as well in the admin panel.",
    tags: ["NextJS", "TailwindCSS", "Aceeternity", "ThreeJS", "Framer Motion"],
    imageUrl: JSBranding,
    url_link: "https://js-brand.vercel.app/",
  },
  {
    title: "Iphone Clone",
    description:
      "A FullStack MERN NextJS14 Threads App with React, Next JS, TypeScript, MongoDB with usage of ShadCN UI with CSS framework Tailwind. It has also server side rendering and MongoDB handling with schemas. Multiple data population, responsive layouts with TailwindCSS, Clerk for authentication, handle file uploads with UploadThing, validate data with Zod and manage forms with react hook form",
    tags: ["ShadCN", "Next.js", "Typescript", "Clerk", "Zod Validation"],
    imageUrl: Jphone,
    url_link: "https://jphone.netlify.app/",
  },
  {
    title: "Start Up Template",
    description:
      "A FullStack MERN NextJS14 Threads App with React, Next JS, TypeScript, MongoDB with usage of ShadCN UI with CSS framework Tailwind. It has also server side rendering and MongoDB handling with schemas. Multiple data population, responsive layouts with TailwindCSS, Clerk for authentication, handle file uploads with UploadThing, validate data with Zod and manage forms with react hook form",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion"],
    imageUrl: StartUp,
    url_link: "https://start-up-temp.vercel.app/",
  },
  {
    title: "Branding Site Template",
    description:
      "A FullStack MERN NextJS14 Threads App with React, Next JS, TypeScript, MongoDB with usage of ShadCN UI with CSS framework Tailwind. It has also server side rendering and MongoDB handling with schemas. Multiple data population, responsive layouts with TailwindCSS, Clerk for authentication, handle file uploads with UploadThing, validate data with Zod and manage forms with react hook form",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion"],
    imageUrl: BrandingSite,
    url_link: "https://branding-site.vercel.app/",
  },
  {
    title: "Adventure Book",
    description:
      "A NextJS13 fullstack project, where an e-shop needed to be devevloped after a product owners demand (so far). Where the CSS framework is TailwindCSS with the usage of React-Observer and Framer Motion, also creating the collections in Prisma. Stripe is set in test mode and works.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind", "Prisma", "Stripe"],
    imageUrl: AdventureBook,
    url_link: "https://adventure-book.vercel.app/",
  },
] as const;

export const projectsDataSupabase = [
  {
    title: "Fullstack SASS Blog",
    description:
      "A FullStack Hotel Booking Web App in Next.js 14, React, Typescript, Shadcn, Clerk, My SQL (planetscale), Zustand, Stripe. You can create a user with Clerk if you want to 'rent' a room or add your own hotel and rooms. The date picker cannot overlap a current booked room and the filter list can only show states / ciites if there is any in the selected country. ",
    tags: ["Next.js", "TailwindCSS", "Supabase", "Stripe", "PostgreSQL", "Framer Motion"],
    imageUrl: SupabaseSass,
    url_link: "https://tmsblog.vercel.app/",
  },
  {
    title: "Fullstack Image Upload Storage",
    description:
      "I worked as a full-stack developer on this startup project for 7 months. Started from designing a Figma Prototype, to build up the NodeJS and Express server with client. Next step was to make sure every page is responsive and setup analytics with GA4 and PostHog, along with EmailJS. Having visualize data as well in the admin panel.",
    tags: ["Next.js", "TailwindCSS", "Supabase", "PostgreSQL", "Framer Motion", "Storage Bucket"],
    imageUrl: SupabaseUploader,
    url_link: "https://supaimgupload.vercel.app/auth?next=%2F",
  },
  {
    title: "Fullstack Photo Saver",
    description:
      "A NextJS13 fullstack project, where an e-shop needed to be devevloped after a product owners demand (so far). Where the CSS framework is TailwindCSS with the usage of React-Observer and Framer Motion, also creating the collections in Prisma. Stripe is set in test mode and works.",
    tags: ["Next.js", "TailwindCSS", "Supabase", "PostgreSQL", "Framer Motion", "Storage Bucket"],
    imageUrl: orgoneImg,
    url_link: "/",
  },
] as const;


export const skillsData = [
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
  "Analytics",
  "Figma",
  "Angular",
  "Framer Motion",
  "PHP",
  "C# / ASP.NET",
  "PlanetScale",
  "ShadCN",
  "Zustand",
] as const;


export const reviewsData = [
  {
    imageCover: firstcard,
    imageProfile: zan,
    name: 'Zan Mahmoud',
    position: 'CEO: NanoScaleSimulations',
    text: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.'
  },
  {
    imageCover: secondcard,
    imageProfile: kellie,
    name: 'Kellie Fisher',
    position: 'CEO: Orgone Jewels',
    text: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.'
  },
  {
    imageCover: thirdcard,
    imageProfile: avatar,
    name: 'Per Jensen',
    position: 'CEO: GF-Trekroner',
    text: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.'
  },
  
] as const;
