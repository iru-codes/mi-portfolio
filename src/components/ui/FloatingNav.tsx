import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent-2 text-background-dark dark:bg-accent dark:text-deep-violet shadow-lg hover:scale-110 transition-transform"
                aria-label="Scroll to top"
            >
                <ChevronUp size={26} />
            </button>
        )
    );
}