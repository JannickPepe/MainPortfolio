
import React from "react";
import { Meteors } from "./Meteors";
import ExampleWrapper from "./SpringModal";
import ExampleWrapperThree from "./SpringModalThree";
import ExampleWrapperTwo from "./SpringModalTwo";

export const MeteorPreview = () => {

    return (
        <div className="mt-14 mb-6">
            <div className=" relative">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" 
                />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="mx-auto mt-10 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <ExampleWrapper />
                        <ExampleWrapperThree />
                        <ExampleWrapperTwo />
                    </div>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={10} />
                </div>
            </div>
        </div>
    );
    
};