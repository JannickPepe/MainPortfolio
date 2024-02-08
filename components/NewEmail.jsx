
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const NewEmail = () => {

    return (
      <div>
        <div className="flex justify-center items-center">

	        <div className="container mx-auto my-4 px-4 0">

		      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
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
				    <div className="my-2 w-1/2 lg:w-1/2">
					    <button className="uppercase text-base font-bold tracking-wide h-full bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
p-3 rounded-lg w-full focus:outline-none focus:shadow-outline text-slate-600 hover:text-purple-500">
                Send Message
              </button>
				    </div>
			    </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-sky-500 bg-clip-padding backdrop-filter 
          backdrop-blur-sm bg-opacity-10 border border-purple-300 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4 text-slate-600">Hey <span className='text-purple-500'>You!</span> Over Here!</h1>
              <p className="text-gray-400">Please contact me directly at <span className='underline text-sky-500'>jannickpedersen@live.dk</span> or through this form.</p>

              <div className="flex text-start my-4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl text-slate-600">Address</h2>
                  <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                </div>
              </div>
              
              <div className="flex my-4 text-start">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl text-slate-600">Phone</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center ">
                <div className="flex flex-col">
                  <div className="px-4 py-2 mx-autorounded-2xl">
                    <div className="px-5 pt-3 bg-white shadow-lg rounded-2xl">
                      <div className="flex flex-row">
                        <div className="flex group">
                          <a href="#" className="p-3 text-sky-700 hover:text-yellow-500">
                            <span className="flex flex-col items-center">
                              <div className="mx-1 text-gray-600 group-hover:text-gray-700
                              transition-color duration-200">
                                <FaFacebook size={24} />
                              </div>
                              <span className="text-xs mb-2 transition-all duration-200">
                                FaceBook
                              </span>
                              <span className="h-1 w-5 rounded-full group-hover:bg-yellow-500
                              transition-all duration-150 delay-100">
                              </span>
                            </span>
                          </a>
                        </div>

                        <div className="flex group">
                          <a href="#" className="p-3 text-sky-700 hover:text-yellow-500">
                            <span className="flex flex-col items-center">
                              <div className="mx-1 text-gray-600 group-hover:text-gray-700
                              transition-color duration-200">
                                <FaLinkedinIn size={24} />
                              </div>
                              <span className="text-xs mb-2 transition-all duration-200">
                                LinkedIn
                              </span>
                              <span className="h-1 w-5 rounded-full group-hover:bg-yellow-500
                                transition-all duration-150 delay-100"></span>
                            </span>
                          </a>
                        </div>

                        <div className="flex group">
                          <a href="#" className="p-3 text-sky-700 hover:text-yellow-500">
                            <span className="flex flex-col items-center">
                              <div className="mx-1 text-gray-600 group-hover:text-gray-700
                              transition-color duration-200">
                                <FaGithub size={24} />
                              </div>
                              <span className="text-xs mb-2 transition-all duration-200">
                                Github
                              </span>
                              <span className="h-1 w-5 rounded-full group-hover:bg-yellow-500
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
