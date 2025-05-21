import { motion } from "framer-motion";

interface HobbyCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export function HobbyCard({ title, description, image, link }: HobbyCardProps) {
    return (
        <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-4 bg-background-light dark:bg-background-dark border border-accent rounded-2xl p-4 transition-shadow hover:shadow-lg"
        >
        <img
            src={image}
            alt={title}
            className="w-32 h-32 object-cover rounded-xl"
        />
        <div className="text-left">
            <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">{title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-sm">{description}</p>
        </div>
        </motion.a>
    );
}
