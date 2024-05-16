'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";



const NavbarNew = () => {

    return (
        <GlassNavigation />
    );

};

const GlassNavigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navRef = useRef(null);

    return (
        <nav
        ref={navRef}
        className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-4xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
        >
            <div className="glass-nav px-5 py-5">
                <div className="flex items-center justify-center">
                    <Links />
                </div>
                
                <div className="flex items-center justify-end">
                    <Buttons setMenuOpen={setMenuOpen} />
                </div>
            </div>

            <MobileMenu menuOpen={menuOpen} />
        </nav>
    );

};



const Links = () => {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (

        <div className="hidden items-center gap-2 md:flex z-[999] ">
            <ul className="flex w-[28rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {links.map((link) => (
                    <motion.li
                    className="h-3/4 flex items-center justify-center relative"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                    <Link
                        className={clsx(
                        "flex w-full items-center justify-center px-3 py-2 font-semibold text-slate-700 hover:text-slate-200 transition dark:text-white dark:hover:text-indigo-400",
                        {
                            "text-white dark:text-gray-200":
                            activeSection === link.name,
                        }
                        )}
                        href={link.hash}
                        onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        }}
                    >
                        {link.name}

                        {link.name === activeSection && (
                        <motion.span
                            className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                            layoutId="activeSection"
                            transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                            }}
                        ></motion.span>
                        )}
                    </Link>
                    
                    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-r dark:from-slate-600 dark:to-slate-800 rounded-full absolute inset-0 -z-10 dark:bg-gray-800">
                    </div>

                    </motion.li>
                ))}
            </ul>
        </div>
    )

};


const Buttons = ({ setMenuOpen }) => (

    <div className="gap-4">
        <button
        onClick={() => setMenuOpen((pv) => !pv)}
        className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
        >
            <FiMenu />
        </button>
    </div>

);


const MobileMenu = ({ menuOpen }) => {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


    const [refHeight, { height }] = useMeasure();
    
    return (
        <motion.div
        initial={false}
        animate={{
            height: menuOpen ? height : "0px",
        }}
        className="block overflow-hidden md:hidden"
        >
            <div ref={refHeight} className="flex items-center px-4 pb-4">
                <div className="mx-auto space-y-2">
                    {links.map((link) => (
                        <motion.div
                        className="text-center p-1 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 dark:bg-gradient-to-r dark:from-indigo-500 dark:to-purple-700"
                        key={link.hash}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                            className="col-span-1"
                                href={link.hash}
                                onClick={() => {
                                setActiveSection(link.name);
                                setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className=""
                                        layoutId="activeSection"
                                        transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                        }}
                                    >
                                    </motion.span>
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

};


export default NavbarNew;