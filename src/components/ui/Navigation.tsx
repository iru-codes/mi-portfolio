import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#projects" },
    { name: "CV", href: "#cv" },
    { name: "Contacto", href: "#contact" }
];

export function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-md text-bg-light"
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul
                className={cn(
                    "gap-6 text-sm font-medium lg:flex lg:items-center lg:static",
                    !open && "hidden",
                    open && "absolute top-full left-0 bg-background-light dark:bg-background-dark shadow-md rounded-md w-48 p-4 z-40 flex flex-col"
                )}
            >
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="block py-2 px-4 text-bg-light hover:text-accent-2 dark:hover:text-accent didact-gothic-regular text-2xl"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}