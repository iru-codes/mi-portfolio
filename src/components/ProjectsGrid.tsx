import { motion } from "framer-motion";
import type { AnimationControls } from "framer-motion";
import type { Project } from "@/types/project";


interface ProjectGridProps {
  projects: Project[];
  projectRef: React.Ref<HTMLElement>;
  controls: AnimationControls;
  onSelectProject: (project: Project) => void;
}

export function ProjectGrid({ projects, projectRef, controls, onSelectProject }: ProjectGridProps) {
  return (
    <section id="projects" className="py-9 bg-not-blue dark:bg-background-dark rounded-2xl p-[1%]" ref={projectRef}>
      <h2 className="text-6xl font-bold text-center mb-10 text-accent-2 dark:text-bg-light dongle-regular">Proyectos Destacados</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => onSelectProject(project)}
            className="text-left rounded-2xl border-2 border-accent-2 text-bg-light dark:border-primary p-4 m-4 shadow-sm bg-primary dark:bg-deep-violet transition hover:scale-[1.02] hover:shadow-md"
          >
            <div className="h-40 bg-zinc-100 dark:bg-background-dark mb-4 bg-primary rounded-2xl">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <span className="text-sm text-zinc-400">Sin imagen</span>
              )}
            </div>
            <h3 className="text-3xl font-semibold mb-2 comic-neue-bold">{project.title}</h3>
            <p className="text-sm text-bg-ligt dark:text-zinc-300 mb-3 didact-gothic-regular">
              {project.description}
            </p>
            <div className="flex gap-2">
              <span className="text-sm font-medium underline text-accent-2 dark:text-accent didact-gothic-regular">
                Ver más
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}