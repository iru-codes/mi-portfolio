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
        <div className="flex flex-col justify-start items-center w-[50%] gap-5 p-4 border-2 border-primary rounded-2xl">
            <p className="didact-gothic-regular text-4xl text-bg-light z-2">Estamos a un mensaje de distancia</p>
            <motion.img 
            src="/love-message.svg" 
            alt="Mensaje" 
            className="w-60 z-1 -rotate-30 cursor-pointer rotar-x-15 -rotar-y-30"
            ref={ref}
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.8 }}
            />
            <h2 className="dongle-regular text-8xl z-2 -mt-5">¿Hacemos team?</h2>
        </div>
    );
}