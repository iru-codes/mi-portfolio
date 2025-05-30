import { SkillBar } from "./SkillBar";

export function CVSection() {
  return (
    <section id="cv" className="w-full py-7 px-4 max-w-2xl mx-auto">
      <div className="w-full">
        <h2 className="text-4xl md:text-7xl font-bold text-center mb-2 dongle-regular">Aptitudes</h2>
        <div className="flex flex-col items-center gap-3">
          <SkillBar label="Aplicaciones Web" value={4} />
          <SkillBar label="Landing Pages" value={6} />
          <SkillBar label="Sitios Web" value={3} />
          <SkillBar label="Diseño" value={5} />
          <SkillBar label="Inglés" value={7} />
          <SkillBar label="SEO" value={6} />

          <h2 className="text-4xl md:text-6xl font-bold mt-6 text-center dongle-regular">Currículum Vitae</h2>
        <a
          href="/IrupéAlvarez-CV.pdf"
          download
          className="w-half max-w-xs text-center px-6 py-3 rounded-2xl bg-primary text-xl md:text-2xl text-white hover:bg-deep-violet hover:text-accent-2 dark:hover:bg-background-light dark:hover:text-deep-violet comic-neue-bold"
        >
          Descargar CV (PDF)
        </a>
      </div>
    </div>
  </section>
  );
}