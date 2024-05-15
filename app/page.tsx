import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";
import Experience from "@/components/Experience/experience";
import Intro from "@/components/Home/intro";
import Projects from "@/components/Projects/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/Skills/skills";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/components/Reviews/reviews"), {
  ssr: false,
  loading: () => <p>LOADING...</p>
});

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <DynamicHeader />
      <Contact />
    </main>
  );
}
