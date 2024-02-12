
import React from 'react'

const ListView = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-2 gap-2 lg:gap-8 xl:gap-8">

            <div className="left-bar">

                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">Javascript: <span className=" text-base text-indigo-500">80%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">CSS3: <span className=" text-base text-indigo-500">80%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">TailwindCSS: <span className=" text-base text-indigo-500">70%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-red-500 sm:bg-yellow-400 absolute" style={{width:'70%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">C#/ASP.Net: <span className=" text-base text-indigo-500">80%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">PHP: <span className=" text-base text-indigo-500">60%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-green-500 sm:bg-red-500 absolute" style={{width:'60%'}}></div>
                </div>

            </div>

            <div className="right-bar">

                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">Angular: <span className=" text-base text-indigo-500">80%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">ReactJS: <span className=" text-base text-indigo-500">80%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">Analytics: <span className=" text-base text-indigo-500">80%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute" style={{width:'80%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">NodeJS: <span className=" text-base text-indigo-500">70%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-red-500 sm:bg-yellow-400 absolute" style={{width:'70%'}}></div>
                </div>
                <h1 className="pt-2 sm:pt-5 text-slate-800 dark:text-white font-semibold">NextJS: <span className=" text-base text-indigo-500">60%</span></h1>
                <div className="mt-2 mx-auto h-4 relative max-w-[24rem] lg:w-96 rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full bg-green-500 sm:bg-red-500 absolute" style={{width:'60%'}}></div>
                </div>

            </div>

        </div>
    );

};


export default ListView;
