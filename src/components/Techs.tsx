import {motion} from "framer-motion";

export function Techs() {
    return (
        <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 px-4 py-10">
            <div className="w-full max-w-xl mb-5">
                <h2 className="text-6xl font-bold text-center text-deep-violet dark:text-bg-light dongle-regular ">Tecnologías</h2>
                <div className="p-4 flex flex-wrap justify-around gap-4 bg-not-blue dark:bg-background-dark rounded-4xl border-2 border-primary">
                {[
                    { src: "./tecnologias/javascript.svg", alt: "JavaScript" },
                    { src: "./tecnologias/html5.svg", alt: "HTML5" },
                    { src: "./tecnologias/css3.svg", alt: "CSS3" },
                    { src: "./tecnologias/tailwind-css.svg", alt: "Tailwind CSS" },
                    { src: "./tecnologias/react.svg", alt: "React" },
                    { src: "./tecnologias/typescript.svg", alt: "TypeScript" },
                    ].map((tech, i) => (
                    <motion.img
                        key={i}
                        src={tech.src}
                        alt={tech.alt}
                        className="w-12 h-12 md:w-16 md:h-16"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    ))}
                </div>
            </div>

            <div>
                <h2 className=" text-6xl font-bold text-center text-deep-violet dark:text-bg-light dongle-regular">Herramientas</h2>
                <div className="p-4 flex flex-wrap justify-around gap-4 bg-not-blue dark:bg-background-dark rounded-4xl border-2 border-accent-2 dark:border-primary">
                {[
                    { src: "./herramientas/Trello.svg", alt: "Trello" },
                    { src: "./herramientas/git.svg", alt: "Git" },
                    { src: "./herramientas/GitHub.svg", alt: "GitHub" },
                    { src: "./herramientas/vite.svg", alt: "Vite" },
                    { src: "./herramientas/Canva.svg", alt: "Canva" },
                    { src: "./herramientas/figma.svg", alt: "Figma" },
                    { src: "./herramientas/photoshop.svg", alt: "Adobe Photoshop" },
                    ].map((tech, i) => (
                    <motion.img
                        key={i}
                        src={tech.src}
                        alt={tech.alt}
                        className="w-12 h-12 md:w-16 md:h-16"
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