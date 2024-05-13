import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Project from "./project";
import { projectsData } from "@/lib/data";
import { RepoLinks } from "./RepoLinks";


const ProjectCategory = () => {

    return (
        <div className="px-4">
            <div className="mx-auto max-w-5xl">

                <Question title="Fullstack JS Frameworks" defaultOpen>
                    <div className="">
                        {projectsData.map((project, index) => (
                            <React.Fragment key={index}>
                                <Project {...project} />
                            </React.Fragment>
                        ))}
                    </div>
                </Question>

                <Question title="SPA">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
                    perspiciatis ad vero.
                </p>
                </Question>

                <Question title="Fullstack Supabase">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
                    perspiciatis ad vero.
                </p>
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
        className="border-b-[1px] border-b-slate-300"
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
                className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-left text-2xl font-medium"
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
                    color: "#7c3aed",
                    },
                }}
                >
                <FiChevronDown className="text-2xl" />
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