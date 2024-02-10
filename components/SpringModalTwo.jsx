
import { AnimatePresence, motion } from "framer-motion";
import { FaCss3Alt } from "react-icons/fa";
import { useState } from "react";
import HoverDevCardsTwo from "./HoverDevCardsTwo";
import { IoMdClose } from "react-icons/io";


const ExampleWrapperTwo = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        //bg-gradient-to-r from-indigo-500 to-purple-700 py-12
        <div className="flex justify-center text-white hover:text-slate-300 rounded-lg py-4">
            <button onClick={() => setIsOpen(true)} className="group text-lg font-bold text-center transition-all duration-300 ease-in-out">
                <span className='bg-left-bottom bg-gradient-to-r from-indigo-500 to-purple-700 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out'> 
                    CSS, UI & Analtics
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
                className="bg-slate-900/20 backdrop-blur p-4 md:p-4 lg:p-8 xl:p-8 fixed inset-0 z-50 grid place-items-center max-sm:overflow-y-scroll cursor-pointer"
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="open-modal-body bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                >
                    
                    <FaCss3Alt className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-20 -left-24" />
                    <div className="relative z-10">
                        <button onClick={() => setIsOpen(false)} >
                            <div className="bg-white w-12 h-12 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto hover:scale-110">
                                <IoMdClose size={30} />
                            </div>
                        </button>
                        <h3 className="text-3xl font-bold text-center mb-2">
                            CSS Frameworks & UI programs
                        </h3>
                        <p className="text-center mb-4">
                        My core stack is React, Next.js, Node.js, Angular, Express, Firebase and MongoDB. 
                        I am also familiar with TypeScript, React Query, Sanity and Prisma.
                        </p>
                        <HoverDevCardsTwo />
                    </div>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );

};


export default ExampleWrapperTwo;