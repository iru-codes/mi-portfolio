import type { Project } from "@/types/project";
import { useEffect, useRef } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div 
      ref={modalRef}
      className="max-w-lg w-full bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-xl relative">
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-3 right-3 text-not-blue hover:text-secondary dark:text-bg-light dark:hover:text-accent dongle-regular"
        >
          ✕
        </button>
        <h3 className="text-4xl font-semibold mb-2 dongle-regular">{project.title}</h3>
        <img  className="rounded-2xl mb-2" src={project.image} alt="Portada del Proyecto" />
        <p className="text-md text-not-blue dark:text-bg-light mb-4 didact-gothic-regular">{project.description}</p>
        <p className="text-md text-not-blue dark:text-bg-light mb-6 didact-gothic-regular">{project.description2}</p>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary dark:text-accent text-md comic-neue-regular"
          >
            Visitar↗
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary dark:text-accent text-md comic-neue-regular"
          >
            Repo↗
          </a>
        </div>
      </div>
    </div>
  );
}