
'use client'

import React from "react";
import Image from "next/image";
import UdemyReact from "../public/ReactJS_Firebase.jpg";
import UdemyReactTwo from "../public/PBA_MERN.jpg";
import UdemyNextJS from "../public/NextJS_Apollo_MongoDB_graphQL.jpg";
import UdemyWordpress from "../public/WP_Begynder_Certificate.jpg";
import UdemyWordpressTwo from "../public/WP_Intermediate_Certificate.jpg";
import UdemyJavascript from "../public/CompleteJS_course.jpg";
import { IoMdCloseCircle } from "react-icons/io";


const Tabs = ({ color }) => {

    const [openTab, setOpenTab] = React.useState();

    return (
        <div className="flex flex-wrap">
            <div className="">
                <h2 className="text-slate-500 font-bold text-xs inline-block" >More on the way!!</h2>
                <div className={"text-white cursor-pointer bg-sky-500 hover:bg-red-500 rounded-xl inline-block ml-1 top-1.5 relative"}
                    onClick={e => {
                    setOpenTab(false);
                    }}
                > 
                    <IoMdCloseCircle size={21} />
                </div>
                <ul className="flex mb-0 flex-wrap pt-3 pb-4 flex-row" role="tablist" >
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 1
                                ? "text-white bg-" + color + "-600 bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600"
                                : "text-slate-700 bg- dark:text-white dark:bg-" + color + "-600 bg-gradient-to-l from-sky-200 to-white dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            ReactJS
                        </a>
                    </li>

                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 2
                                ? "text-white bg-" + color + "-600 bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600"
                                : "text-slate-700 bg- dark:text-white dark:bg-" + color + "-600 bg-gradient-to-l from-sky-200 to-white dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            NextJS
                        </a>
                    </li>

                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center md:mt-2 lg:mt-2">
                        <a className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 3
                                ? "text-white bg-" + color + "-600 bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600"
                                : "text-slate-700 bg- dark:text-white dark:bg-" + color + "-600 bg-gradient-to-l from-sky-200 to-white dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            Wordpress
                        </a>
                    </li>

                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mt-2">
                        <a className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 4
                                ? "text-white bg-" + color + "-600 bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600"
                                : "text-slate-700 bg- dark:text-white dark:bg-" + color + "-600 bg-gradient-to-l from-sky-200 to-white dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(4);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            JavaScript
                        </a>
                    </li>
                </ul>

                <div className="relative flex flex-col min-w-0 break-words w-full rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">

                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <h3 className="text-black mb-1 font-semibold">ReactJS Fullstack</h3>
                                <Image src={UdemyReact} alt="udemy reactjs" />
                                <hr className="h-1 my-2 bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600 w-full rounded-lg"/>
                                <Image src={UdemyReactTwo} alt="udemy reactjs" />
                            </div>

                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <h3 className="text-black mb-1 font-semibold">NextJS Fullstacks</h3>
                                <Image src={UdemyNextJS} alt="udemy nextjs" />
                            </div>
                            
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <h3 className="text-black mb-1 font-semibold">WordPress Courses</h3>
                                <Image src={UdemyWordpress} alt="udemy Wordpress" />
                                <hr className="h-1 my-1 bg-gradient-to-r from-indigo-600 to-[#44BCFF] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600 w-full rounded-lg"/>    
                                <Image src={UdemyWordpressTwo} alt="udemy Wordpress" />
                            </div>

                            <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                <h3 className="text-black mb-1 font-semibold">JavaScript Courses</h3>
                                <Image src={UdemyJavascript} alt="udemy Javascript" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default function VerticalTabs() {

    return (
        <>
            <Tabs color="pink" />
        </>
    );

};