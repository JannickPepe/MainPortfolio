
"use client";

import React from "react";
import { skillsData } from "@/lib/data";
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
        },
    }),
};


const BoxList = () => {

    return (
        <div className="relative z-0">
            <div className="w-full mx-auto px-4 md:px-6 pt-4">
                <div className="text-center">
                    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 md:mt-8 lg:mt-10">
                        {skillsData.map((skill, index) => (
                            <motion.li
                                className="bg-white borderBlack rounded-xl px-2 py-2 dark:bg-white dark:text-slate-700"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

};


export default BoxList;
