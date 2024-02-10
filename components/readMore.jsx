
import React, { useState } from "react";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <button className="text">
            {isReadMore ? text.slice(0, 156) : text}
            <div
                onClick={toggleReadMore}
                className="read-or-hide mt-1 max-w-[200px] mx-auto text-slate-800 font-semibold focus:outline-none flex justify-center hover:text-white dark:hover:text-sky-500 hover:bg-gradient-to-r from-indigo-500 to-purple-700 hover:rounded-2xl"
            >
                {isReadMore ? "Read More" : "Close"}
            </div>
        </button>
    );

};


const Content = () => {

    return (
        <div className="container text-gray-500 dark:text-gray-400 font-medium">
            {/* <h2> */}
                <ReadMore>
                    After graduating with a Computer Science diploma and PBA degree in Web development and App, 
                    I decided to be in internships and freelance in startup. 
                    To futher gain more code understanding, I also took various courses full-stack web development. It provides a variety of
                    services for you to learn, so thrive and
                    also have fun! Free Tutorials, Millions
                    of Articles, Live, Online and Classroom
                    Courses ,Frequent Coding Competitions,
                    Webinars by Industry Experts, Internship
                    opportunities, and Job Opportunities.
                    Knowledge is power!
                </ReadMore>
            {/* </h2> */}
        </div>
    );

};

export default Content;