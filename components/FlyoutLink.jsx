
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverDevCards from "./HoverDevCards";

const ShowMore = () => {
    return (
        <div className="flex justify-center bg-gradient-to-l from-indigo-500 to-purple-700 py-12 rounded-lg z-50">
            <FlyoutLink FlyoutContent={PricingContent}>
                Langauges & Tech Stack
            </FlyoutLink>
        </div>
    );
};


const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative w-fit h-fit" >
            <a href={href} className="relative text-white">
                {children}
                <span
                style={{
                    transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 
                rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ translateX: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 top-12 text-black"
                >
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-600 dark:bg-sky-700" />
                    <FlyoutContent />
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const PricingContent = () => {
    return (
        <div className="w-[300px] lg:w-[400px] xl:w-[400px] bg-slate-600 dark:bg-sky-700 p-4 shadow-xl z-50 rounded">
        <div className="mb-3 space-y-3">
            <h3 className="font-semibold text-white dark:text-white">
            My core stack is React, Next.js, Node.js, Angular, Express, Firebase and MongoDB. I am also familiar with TypeScript, React Query, Sanity and Prisma.
            </h3>
        </div>
        <HoverDevCards />
        </div>
    );

};


export default ShowMore;