import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <div id="inicio" className="block items-center justify-center gap-6">
        <div className="flex flex-row-reverse justify-center items-center gap-6">
          <img
            src="/perfil.webp"
            alt="Irupé Alvarez"
            className="w-64 h-64 rounded-full object-cover border-4 border-primary dark:border-accent"
          />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl md:text-8xl font-bold dongle-regular">Hola, soy Irupé Alvarez</h1>
            <p className="text-xl md:text-5xl text-deep-violet dark:text-bg-light comic-neue-light -mt-6">Frontend Web Developer</p>
            <p className="max-w-xl text-base md:text-xl text-not-blue dark:text-bg-light didact-gothic-regular">
            Me gusta crear experiencias digitales divertidas y funcionales. Siempre estoy aprendiendo y buscando nuevos desafíos.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}