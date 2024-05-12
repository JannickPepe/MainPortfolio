
'use client';

import React from 'react';
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

const fadeInAnimationVariantsRight = {
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
        duration: 0.7,
        },
    }),
};


const ListView = () => {

    return (
        <div>
            <h3 className="text-center text-slate-700 font-bold mb-2">Hover to show different stages</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-2 lg:gap-4 xl:gap-4">

                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: false,
                    }}
                >
                    <div className="left-bar hover:bg-slate-800 p-4 lg:p-6 xl:p-6 rounded-lg">

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'><p>Advance in Javascript Vanilla</p></div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                Javascript: <span className=" text-base text-indigo-500 font-bold">80%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-green-600 absolute" style={{width:'80%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'><p>Advance in CSS3 / SASS</p></div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                CSS3: <span className=" text-base text-indigo-500 font-bold">80%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-green-600 absolute" style={{width:'80%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Advance in TailwindCSS in JS Framworks</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                TailwindCSS: <span className=" text-base text-indigo-500 font-bold">80%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-green-600 absolute" style={{width:'80%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Semi-Advance in PHP + Laravel</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                PHP: <span className=" text-base text-indigo-500 font-bold">70%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-indigo-600 absolute" style={{width:'70%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Low Advance in C# / ASP.Net</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                #/ASP.Net: <span className=" text-base font-bold text-indigo-500">60%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-indigo-600 absolute" style={{width:'60%'}}></div>
                        </div>

                    </div>                      
                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariantsRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: false,
                    }}
                >
                    <div className="right-bar hover:bg-slate-800 p-4 lg:p-6 xl:p-6 rounded-lg">

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Advance in ReactJS fullstack</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                ReactJS: <span className=" text-base text-indigo-500 font-bold">85%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-green-600 absolute" style={{width:'85%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Advance in NextJS13 and 14 Fullstack</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                NextJS: <span className=" text-base text-indigo-500 font-bold">85%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] lg:w-96 rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-green-600 absolute" style={{width:'85%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Semi-Advance in Angular12 with Ionic5</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                Angular: <span className=" text-base text-indigo-500 font-bold">70%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-indigo-600 absolute" style={{width:'70%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Advance in GA4 & PostHog</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                Analytics: <span className=" text-base text-indigo-500 font-bold">70%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-indigo-600 absolute" style={{width:'70%'}}></div>
                        </div>

                        <div className='has-tooltip flex justify-center items-center'>
                            <div className='tooltip rounded shadow-lg p-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-white'>
                                <p>Semi-Advance in NodeJS with Express</p>
                            </div>
                            <h1 className="pt-2 sm:pt-5 text-slate-600 dark:text-white font-semibold">
                                NodeJS: <span className=" text-base text-indigo-500 font-bold">70%</span>
                            </h1>
                        </div>
                        <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute "></div>
                            <div className=" h-full bg-indigo-600 absolute" style={{width:'70%'}}></div>
                        </div>
                        
                    </div>
                </motion.div>

            </div>
        </div>

    );

};


export default ListView;
