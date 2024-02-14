
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import PBA from "@/public/PBA.png";
import { BsArrowRight } from "react-icons/bs";


const ExampleWrapperThree = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center text-white hover:text-slate-300 py-4 rounded-lg">
            <button onClick={() => setIsOpen(true)} className="group text-lg font-bold text-center transition-all duration-300 ease-in-out">
                <span className='bg-left-bottom bg-gradient-to-r from-indigo-500 to-purple-700 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out '> 
                    Diploma Certificate <BsArrowRight size={16} className="group-hover:translate-x-1 transition inline-block" />
                </span> 
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );

};


const SpringModal = ({ isOpen, setIsOpen }) => {

    return (
        <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="bg-slate-900/20 h-full backdrop-blur p-2 md:p-4 lg:p-8 xl:p-8 fixed inset-0 z-50 grid place-items-center max-sm:overflow-y-scroll cursor-pointer"
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="open-modal-body top-16 bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-1 rounded-lg w-full max-w-lg shadow-xl cursor-default mt-[55px]"
                >
                    
                    <div className="relative z-10">
                        <button onClick={() => setIsOpen(false)} >
                            <div className="bg-white w-12 h-12 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto hover:scale-110">
                                <IoMdClose size={30} />
                            </div>
                        </button>
                        <div className="relative overflow-hidden bg-cover bg-no-repeat max-w-sm mx-auto rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
                            <Image src={PBA} alt="jannick PBA diploma" className="transition duration-300 ease-in-out hover:scale-125" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );

};


export default ExampleWrapperThree;