import { motion } from "framer-motion";

export function TechBar() {
    return (
        <section className="w-[50%]">
        <h2 className="text-6xl font-bold text-center mb-10 text-accent-2 dark:text-bg-light dongle-regular">Tecnologías</h2>
        <div className="py-3 flex flex-wrap justify-around gap-4 bg-not-blue dark:bg-background-dark rounded-4xl">
        {[
            { src: "/react.svg", alt: "React" },
            { src: "/typescript.svg", alt: "TypeScript" },
            { src: "/javascript.svg", alt: "JavaScript" },
            { src: "/html5.svg", alt: "HTML5" },
            { src: "/css3.svg", alt: "CSS3" },
            { src: "/tailwind-css.svg", alt: "Tailwind CSS" },
            { src: "/vite.svg", alt: "Vite" },
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
    </section>
    )
}