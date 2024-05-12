import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";
import Experience from "@/components/Experience/experience";
import Intro from "@/components/Home/intro";
import Projects from "@/components/Projects/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/Skills/skills";
import Reviews from "@/components/Reviews/reviews";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Reviews />
      <Contact />
    </main>
  );
}
