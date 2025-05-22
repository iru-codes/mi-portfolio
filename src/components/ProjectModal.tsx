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
          className="absolute top-3 right-3 text-zinc-500 hover:text-secondary dark:hover:text-accent"
        >
          ✕
        </button>
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{project.description}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">{project.description2}</p>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary dark:text-accent text-sm"
          >
            Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary dark:text-accent text-sm"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  );
}