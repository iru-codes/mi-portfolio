import {motion} from "framer-motion";

export function Techs() {
    return (
        <section className="w-full flex flex-row justify-center items-center gap-10">
            <div>
                <h2 className="text-6xl font-bold text-center text-deep-violet dark:text-bg-light dongle-regular">Tecnologías</h2>
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
                        className="w-17 h-17"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-6xl font-bold text-center text-deep-violet dark:text-bg-light dongle-regular">Herramientas</h2>
                <div className="p-4 flex flex-wrap justify-around gap-4 bg-zinc-100 dark:bg-zinc-100 rounded-4xl border-2 border-accent-2 dark:border-primary">
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
                        className="w-17 h-17"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}