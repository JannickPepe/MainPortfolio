"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";
import  ProjectCategory from "./ProjectCategory";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <ProjectCategory />
    </section>
  );
}
