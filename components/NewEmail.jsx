
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const NewEmail = () => {

    return (
      <div>
        <div className="flex justify-center items-center">

	        <div className="container mx-auto my-4 px-4 0">

		      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl shadow-purple-300">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send <span className='text-purple-600'>me</span> a <br /> message</h1>
            </div>
			      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				      <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Full Name*" />
			
				      <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email" placeholder="Email*" />
			
            </div>
				    <div className="my-4">
					    <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				    </div>
				    <div className="my-2 text-center">
					    <button className="background-animate hover:animate-wiggle bg-gradient-to-r from-indigo-500 via-green-400 to-purple-700
            dark:bg-gradient-to-bs hover:dark:bg-purple-900 text-white font-bold max-w-[400px]
            mt-6 px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-105 transition text-lg">
                Send Message
              </button>
				    </div>
			    </div>

          <div className="w-full lg:-mt-[26rem] lg:w-2/6 px-8 py-12 ml-auto bg-sky-500 bg-clip-padding backdrop-filter 
          backdrop-blur-sm bg-opacity-10 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4 text-slate-600 dark:text-indigo-400">Hey <span className='text-purple-600'>You!</span> Over Here!</h1>
              <p className="text-gray-400 mb-4">Please contact me directly at: <span className='underline text-sky-500 font-semibold tracking-wider'>Jannickpedersen@live.dk</span></p>

              <div className="flex text-start my-4">
                <div className="flex flex-col mr-1 dark:opacity-60 text-purple-700 dark:text-indigo-600">
                  <FaMapMarkerAlt size={28} />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl text-slate-600 dark:text-white">Address</h2>
                  <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>
              
              <div className="flex my-4 text-start">
                <div className="flex flex-col mr-1 dark:opacity-60 text-purple-700 dark:text-indigo-600">
                    <FaPhone size={28} />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl text-slate-600 dark:text-white">Phone</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-2">
                <div className="flex flex-col">
                  <div className="px-4 pt-2 mx-autorounded-2xl">
                    <div className="px-5 pt-3 bg-white shadow-lg rounded-2xl">
                      <div className="flex flex-row">
                        <div className="flex group">
                          <a href="#" className="p-3 text-black hover:text-yellow-500">
                            <span className="flex flex-col items-center">
                              <div className="mx-1 text-gray-700 group-hover:text-purple-700
                              transition-color duration-200">
                                <FaFacebook size={24} />
                              </div>
                              <span className="text-xs font-semibold my-1 transition-all duration-200 text-indigo-500">
                                FaceBook
                              </span>
                              <span className="h-1 w-5 rounded-full group-hover:bg-black
                              transition-all duration-150 delay-100">
                              </span>
                            </span>
                          </a>
                        </div>

                        <div className="flex group">
                          <a href="#" className="p-3 text-black hover:text-yellow-500">
                            <span className="flex flex-col items-center">
                              <div className="mx-1 text-gray-700 group-hover:text-purple-700
                              transition-color duration-200">
                                <FaLinkedinIn size={24} />
                              </div>
                              <span className="text-xs font-semibold my-1 transition-all duration-200 text-indigo-500">
                                LinkedIn
                              </span>
                              <span className="h-1 w-5 rounded-full group-hover:bg-black
                                transition-all duration-150 delay-100"></span>
                            </span>
                          </a>
                        </div>

                        <div className="flex group">
                          <a href="#" className="p-3 text-black hover:text-yellow-500">
                            <span className="flex flex-col items-center">
                              <div className="mx-1 text-gray-700 group-hover:text-purple-700
                              transition-color duration-200">
                                <FaGithub size={24} />
                              </div>
                              <span className="text-xs font-semibold my-1 transition-all duration-200 text-indigo-500">
                                Github
                              </span>
                              <span className="h-1 w-5 rounded-full group-hover:bg-black
                                transition-all duration-150 delay-100">
                              </span>
                            </span>
                          </a>
                        </div>
				              </div>
			              </div>
		              </div>
	              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default NewEmail;
