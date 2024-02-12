"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaListUl } from "react-icons/fa";
import BoxList from "./BoxList";
import ListView from "./ListView";


export default function Skills() {

  const { ref } = useSectionInView("Skills");
  
  const [openTab, setOpenTab] = React.useState(1);


  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[70rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      <div className="flex flex-wrap dark:text-slate-700">
        <div className="w-full ">

          <ul className="flex mb-0 max-w-[400px] list-none flex-wrap pt-3 pb-4 flex-row mx-auto" role="tablist" >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gradient-to-r from-indigo-500 to-green-400"
                    : "bg-slate-500 opacity-40 hover:opacity-100 hover:bg-white hover:transition hover:ease-in-out hover:delay-250")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
                aria-current="page"
              >
                <div className="flex text-base p-1"><FaListUl size={20} className="mr-2 mt-0.5"></FaListUl>Box View</div>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={ "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gradient-to-r from-indigo-500 to-green-400"
                    : "bg-slate-500 opacity-40 hover:opacity-100 hover:bg-white hover:transition hover:ease-in-out hover:delay-250")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="flex text-base p-1"><FaListUl size={20} className="mr-2 mt-0.5"></FaListUl>List View</div>
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <BoxList />
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <ListView />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );

};
