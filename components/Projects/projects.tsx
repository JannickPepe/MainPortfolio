"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";
import  ProjectCategory from "./ProjectCategory";
import WetPaintBtn from "./WetPaintBtn";
import Character from "@/components/Projects/Character"

const paragraph = "I am currently looking for a fulltime position as a fullstack developer, app or software deveveloper. With good UI experince and usage of analytic tools"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const words = paragraph.split(" ")

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">

      <SectionHeading>My projects</SectionHeading>
      <ProjectCategory />
      
    </section>
  );
}
