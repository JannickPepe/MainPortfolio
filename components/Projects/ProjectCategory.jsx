import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Project from "./project";
import { projectsDataFullstack, projectsDataSPA, projectsDataSupabase } from "@/lib/data";
import { RepoLinks } from "./RepoLinks";
import ProjectSPA from "./projectSPA";
import ProjectSupabase from "./projectSupabase";


const ProjectCategory = () => {

    return (
        <div className="px-4">
            <div className="mx-auto max-w-5xl">

                {/* defaultOpen */}
                <Question title="Fullstack JS Frameworks">
                    <div className="">
                        {projectsDataFullstack.map((project, index) => (
                            <React.Fragment key={index}>
                                <Project {...project} />
                            </React.Fragment>
                        ))}
                    </div>
                </Question>

                <Question title="SPA">
                    <div className="">
                        {projectsDataSPA.map((project, index) => (
                            <React.Fragment key={index}>
                                <ProjectSPA {...project} />
                            </React.Fragment>
                        ))}
                    </div>
                </Question>

                <Question title="Fullstack Supabase">
                    <div className="">
                        {projectsDataSupabase.map((project, index) => (
                            <React.Fragment key={index}>
                                <ProjectSupabase {...project} />
                            </React.Fragment>
                        ))}
                    </div>
                </Question>

                <Question title="Links to important Repos">
                    <RepoLinks />
                </Question>

            </div>
        </div>
    );

};


const Question = ({ title, children, defaultOpen = false }) => {

    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
        animate={open ? "open" : "closed"}
        className="group"
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full justify-between items-center gap-4 py-6"
            >
                <motion.span
                variants={{
                    open: {
                    color: "rgba(3, 6, 23, 0)",
                    },
                    closed: {
                    color: "#4f46e5",
                    },
                }}
                className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-left text-2xl font-medium group-hover:border-b border-purple-500 transition-transform"
                >
                {title}
                </motion.span>
                <motion.span
                variants={{
                    open: {
                    rotate: "180deg",
                    color: "#4f46e5",
                    },
                    closed: {
                    rotate: "0deg",
                    color: "#3A98B9",
                    },
                }}
                >
                <FiChevronDown className="text-2xl rounded-full w-7 h-7 shadow-md shadow-indigo-600 dark:shadow-white hover:bg-transparent" />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                height: open ? height : "0px",
                marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden text-slate-600"
            >
                <div ref={ref}>{children}</div>
            </motion.div>
        </motion.div>
    );

};


export default ProjectCategory;