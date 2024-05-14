import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";


export const GridHoverFooter = () => {

    const [scope, animate] = useAnimate();

    const [size, setSize] = useState({ columns: 0, rows: 0 });

    useEffect(() => {
        generateGridCount();
        window.addEventListener("resize", generateGridCount);

        return () => window.removeEventListener("resize", generateGridCount);
    }, []);

    const generateGridCount = () => {
        const columns = Math.floor(document.body.clientWidth / 75);
        const rows = Math.floor(document.body.clientHeight / 75);

        setSize({
        columns,
        rows,
        });
    };

    const handleMouseLeave = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(id, { background: "rgba(129, 140, 248, 0)" }, { duration: 1.5 });
    };

    const handleMouseEnter = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(id, { background: "rgba(129, 140, 248, 1)" }, { duration: 0.15 });
    };

    return (
        <div className="bg-neutral-950">
            <div ref={scope} className="grid h-[220px] w-full grid-cols-[repeat(auto-fit,_minmax(65px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(65px,_1fr))] ">
                {[...Array(size.rows * size.columns)].map((_, i) => (
                <div
                    key={i}
                    id={`square-${i}`}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    className="w-full"
                />
                ))}
            </div>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
                <button className="pointer-events-auto mix-blend-difference z-50">
                    <div className="relative inline-flex group">
                        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <a href="https://jannickportfolio.netlify.app/" title="Go to 3D Portfolio" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            3D Portfolio
                            <BsArrowRight size={20} className="opacity-70 group-hover:translate-x-1 transition ml-2" />
                        </a>
                    </div>
                </button>
            </div>
        </div>
    );

};