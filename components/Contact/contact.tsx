
"use client";

import React, { useState } from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import sendEmail from "../../email/sendEmail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewEmail from "./NewEmail";


export default function Contact() {

  const { ref } = useSectionInView("Contact");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event: any) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e: any) => {
      e.preventDefault();
      sendEmail(formData);
      setFormData({ name: '', email: '', message: '' });
  };

  const notify = () => toast.success("Message was send!");

  return (
    <motion.section
      className="w-[min(100%,70rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <section id="contact" ref={ref} className="scroll-mt-28 mb-14 sm:mb-40">
        <SectionHeading>Contact me</SectionHeading>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" 
        />

      
        {/*
        <form onSubmit={submitHandler} className="mt-8" autoComplete='id'>
          <div className="mb-1 sm:mb-2">

            <label htmlFor="firstName" className="mb-1 font-medium flex justify-start" >
              Full Name
            </label>

            <input
              placeholder="John Doe"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              name="name" 
              value={formData.name} 
              onChange={handleChange}
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="mb-1 font-medium flex justify-start" >
              E-mail
            </label>

            <input
              placeholder="johndoe@example.org"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange}
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="mb-1 font-medium flex justify-start" >
              Message
            </label>

            <textarea 
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" 
              rows={5} 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Message" 
              required 
            />
          </div>

          <div className="mt-4 mb-2 sm:mb-4">
            <button
              onClick={notify}
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:text-slate-600"
            >
              Submit
            </button>
          </div>

        </form>
         */}
        
        <NewEmail />
      </section>
      
    </motion.section>

  );

};
