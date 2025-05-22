import "@/index.css";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CVSection } from "@/components/CvSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectGrid } from "@/components/ProjectsGrid";
import { ProjectModal } from "@/components/ProjectModal";
import { ContactForm } from "@/components/ContactForm";
import { projects } from "@/data/Projects";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import type { Project } from "@/types/project";
import { SocialIcons } from "@/components/SocialLinks";
import { Hobbies } from "./components/Hobbies";
import { Techs } from "./components/Techs";
import { ContactInvite } from "@/components/ContactInvite";
import { Navigation } from "./components/ui/Navigation";
import { FloatingNav } from "./components/ui/FloatingNav";


export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const { ref: projectRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <div className={"bg-background-light dark:bg-deep-violet text-bg-dark dark:text-bg-light"}>
      <header className="flex items-center justify-between p-4 bg-primary dark:bg-background-dark shadow-md">
        <h1 className="text-xl font-semibold text-bg-light">Irupé Alvarez</h1>
        <Navigation />
        <ThemeToggle />
      </header>
      <main className="p-4">
        <HeroSection />
        <ProjectGrid
          projects={projects}
          projectRef={projectRef}
          controls={controls}
          onSelectProject={project => setActiveProject(project)}
        />
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 m-10">
          <CVSection />
          <Hobbies />
        </div>
        <Techs />
        <div className=" flex flex-col justify-center content-center items-center mt-25">
          <ContactInvite />
          <ContactForm submitted={submitted} setSubmitted={setSubmitted} />
        </div>
        <FloatingNav />
      </main>
      <SocialIcons />
      <p className="flex justify-center content-center items-end gap-10 h-1 p-5 pt-2 font-bold bg-not-blue dark:bg-background-dark text-bg-light dark:text-bg-primary comic-neue-regular">Iru Codes - 2025</p>
    </div>
  );
}