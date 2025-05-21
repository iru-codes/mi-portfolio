import { HobbyCard } from "./HobbyCard";

const hobbies = [
    {
        title: "Diseño de Juegos de Rol",
        description: "Creo maneras de contar historias con un sistema de respaldo y con la ayuda del azar y la imaginación.",
        image: "/assets/itch-game-cover.jpg",
        link: "https://iru-games.itch.io/",
    },
    {
        title: "Escritura Creativa",
        description: "Este blog está en construcción...",
        image: "/assets/collage.jpg",
        link: "#",
    },
];

export function Hobbies() {
    return (
        <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-accent dark:text-background-light">
            Hobbies & Creatividad
        </h2>
        <div className="flex flex-col gap-6 items-center">
            {hobbies.map((hobby, i) => (
            <HobbyCard key={i} {...hobby} />
            ))}
        </div>
        </section>
    );
}
