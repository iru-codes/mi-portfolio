import { HobbyCard } from "./HobbyCard";

const hobbies = [
    {
        title: "Diseño de Juegos de Rol",
        description: "Contando historias con la ayuda del azar y la imaginación.",
        image: "/hobbies/role-playing.png",
        link: "https://iru-games.itch.io/",
    },
    {
        title: "Escritura Creativa",
        description: "Este blog todavía está en construcción...",
        image: "/hobbies/quill.png",
        link: "#",
    },
];

export function Hobbies() {
    return (
        <section className="p-8 w-[40%] justify-center items-center m-4 bg-primary dark:bg-deep-violet border-3 dark:border-accent rounded-2xl">
        <h2 className="text-5xl text-center comic-neue-bold m-8 text-bg-light dark:text-background-light">
            Otros Intereses
        </h2>
        <div className="flex flex-col gap-6 items-center p-4">
            {hobbies.map((hobby, i) => (
            <HobbyCard key={i} {...hobby} />
            ))}
        </div>
        </section>
    );
}
