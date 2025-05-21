import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
    label: string;
    value: number; // del 1 al 10
}

export function SkillBar({ label, value }: SkillBarProps) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const widthPercent = `${value * 10}%`;

    if (inView) {
        controls.start({ width: widthPercent });
    }

    return (
        <div ref={ref} className="w-full max-w-xl mb-2">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-not-blue dark:text-zinc-300">{label}</span>
                <span className="text-sm font-medium text-not-blue dark:text-zinc-400">{value}/10</span>
            </div>
            <div className="w-full h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                className="h-4 bg-primary dark:bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}
