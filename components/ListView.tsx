
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
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">Javascript: <span className=" text-base text-indigo-500 font-bold">80%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 absolute" style={{width:'80%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">CSS3: <span className=" text-base text-indigo-500 font-bold">80%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 absolute" style={{width:'80%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">TailwindCSS: <span className=" text-base text-indigo-500 font-bold">70%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-yellow-400 absolute" style={{width:'70%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">C#/ASP.Net: <span className=" text-base font-bold text-indigo-500">80%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 absolute" style={{width:'80%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">PHP: <span className=" text-base text-indigo-500 font-bold">60%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 sm:bg-red-500 absolute" style={{width:'60%'}}></div>
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

                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">Angular: <span className=" text-base text-indigo-500 font-bold">80%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 absolute" style={{width:'80%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">ReactJS: <span className=" text-base text-indigo-500 font-bold">80%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 absolute" style={{width:'80%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">Analytics: <span className=" text-base text-indigo-500 font-bold">80%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-green-500 absolute" style={{width:'80%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">NodeJS: <span className=" text-base text-indigo-500 font-bold">70%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-yellow-400 absolute" style={{width:'70%'}}></div>
                    </div>
                    <h1 className="pt-2 sm:pt-5 text-sky-500 dark:text-white font-semibold">NextJS: <span className=" text-base text-indigo-500 font-bold">60%</span></h1>
                    <div className="mt-2 mx-auto h-4 relative max-w-[24rem] lg:w-96 rounded-full overflow-hidden">
                        <div className=" w-full h-full bg-gray-200 absolute "></div>
                        <div className=" h-full bg-red-500 absolute" style={{width:'60%'}}></div>
                    </div>

                </div>
            </motion.div>

        </div>
    );

};


export default ListView;
