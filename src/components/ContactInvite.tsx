import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function ContactInvite() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start({ rotateY: 15 });
    }, [inView, controls]);

    return (
        <div className="flex flex-col justify-start items-center w-full max-w-2xl mx-auto gap-5 p-6 border-2 border-primary rounded-2xl bg-background-light dark:bg-background-dark">
            <p className="didact-gothic-regular text-2xl md:text-4xl text-bg-dark dark:text-bg-light z-20 text-center -mb-2">Estamos a un mensaje de distancia</p>
            <motion.img 
            src="/love-message.svg" 
            alt="Mensaje" 
            className="w-40 md:w-60 z-1 -rotate-30 cursor-pointer rotar-x-15 -rotar-y-30"
            ref={ref}
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.8 }}
            />
            <h2 className="dongle-regular text-5xl md:text-8xl z-20 -mt-5 text-center text-deep-violet dark:text-bg-light">¿Hacemos team?</h2>
        </div>
    );
}