import { SkillBar } from "./SkillBar";

export function CVSection() {
  return (
    <section className="py-7 w-[60%]">
      <div className="">
        <h2 className="text-7xl font-bold text-center mb-2 dongle-regular">Aptitudes</h2>
        <div className="flex flex-col items-center gap-3">
          {/* <img src="/public/grafico.svg" alt="Conocimientos" /> */}
          <SkillBar label="Aplicaciones Web" value={4} />
          <SkillBar label="Landing Pages" value={6} />
          <SkillBar label="Sitios Web" value={3} />
          <SkillBar label="Diseño" value={5} />
          <SkillBar label="Inglés" value={7} />
          <SkillBar label="SEO" value={6} />

          <h2 className="text-5xl font-bold mt-5 text-center dongle-regular">Currículum Vitae</h2>
        <a
          href="/IrupéAlvarez-CV.pdf"
          download
          className="px-6 py-3 font-bold rounded-2xl bg-primary text-white hover:bg-deep-violet hover:text-accent-2 dark:hover:bg-background-light dark:hover:text-deep-violet didact-gothic-regular"
        >
          Descargar CV (PDF)
        </a>
      </div>
    </div>
  </section>
  );
}