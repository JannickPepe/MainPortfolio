
import React from "react";
import { FaReact, FaAngular, FaPhp } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";


const HoverDevCards = () => {

    return (
        <div>
            <div className="grid grid-cols-2 lg:gap-4 xl:gap-4 gap-2 ">
                <Card title="ReactJS / NextJS" subtitle="MERN & FERN Stacks" Icon={FaReact} />
                <Card title="Angular" subtitle="Angular12 & Firebase" Icon={FaAngular} />
                <Card title="C#/ASP.Net" subtitle="Azure and Blazor" Icon={DiVisualstudio} />
                <Card title="PHP" subtitle="Fullstack with PhpStorm" Icon={FaPhp} />
            </div>
        </div>
    );

};


const Card = ({ title, subtitle, Icon}) => {

    return (
        <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white" >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
            <p className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </p>
            <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle}
            </p>
        </div>
    );

};

export default HoverDevCards;