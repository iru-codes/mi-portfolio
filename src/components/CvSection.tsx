import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";

export function CVSection() {
  return (
    <section className="py-12 w-[60%]">
      <h2 className="text-7xl font-bold text-center mb-10 dongle-regular">Aptitudes</h2>
      <div className="flex flex-col items-center gap-4">
        {/* <img src="/public/grafico.svg" alt="Conocimientos" /> */}
        <SkillBar label="Aplicaciones Web" value={4} />
        <SkillBar label="Landing Pages" value={6} />
        <SkillBar label="Sitios Web" value={3} />
        <SkillBar label="Diseño" value={7} />
        <SkillBar label="Inglés" value={7} />
        <SkillBar label="SEO" value={6} />
        
        <div>
          <h2 className="text-6xl font-bold text-center text-accent-2 dark:text-bg-light dongle-regular">Tecnologías</h2>
          <div className="p-5 flex flex-wrap justify-around gap-4 bg-not-blue dark:bg-background-dark rounded-4xl border-2 border-primary">
          {[
              { src: "/react.svg", alt: "React" },
              { src: "/typescript.svg", alt: "TypeScript" },
              { src: "/javascript.svg", alt: "JavaScript" },
              { src: "/html5.svg", alt: "HTML5" },
              { src: "/css3.svg", alt: "CSS3" },
              { src: "/tailwind-css.svg", alt: "Tailwind CSS" },
              ].map((tech, i) => (
              <motion.img
                  key={i}
                  src={tech.src}
                  alt={tech.alt}
                  className="w-12 h-12"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
              />
              ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-6xl font-bold text-center text-accent-2 dark:text-bg-light dongle-regular">Herramientas</h2>
          <div className="p-4 flex flex-wrap justify-around gap-4 bg-zinc-100 dark:bg-background-dark rounded-4xl border-2 border-accent-2">
          {[
              { src: "/Trello.svg", alt: "Trello" },
              { src: "/git.svg", alt: "Git" },
              { src: "/GitHub.svg", alt: "GitHub" },
              { src: "/vite.svg", alt: "Vite" },
              { src: "/Canva.svg", alt: "Canva" },
              { src: "/figma.svg", alt: "Figma" },
              { src: "/photoshop.svg", alt: "Adobe Photoshop" },
              ].map((tech, i) => (
              <motion.img
                  key={i}
                  src={tech.src}
                  alt={tech.alt}
                  className="w-12 h-12"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
              />
              ))}
          </div>
        </div>
        
        <h2 className="text-5xl font-bold mt-5 text-center dongle-regular">Currículum Vitae</h2>
        <a
          href="/IrupéAlvarez-CV.pdf"
          download
          className="px-6 py-3 font-bold rounded-2xl bg-primary text-white hover:bg-deep-violet hover:text-accent-2 dark:hover:bg-background-light dark:hover:text-deep-violet didact-gothic-regular"
        >
          Descargar CV (PDF)
        </a>
      </div>
    </section>
  );
}