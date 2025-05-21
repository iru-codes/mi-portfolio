import { SkillBar } from "./SkillBar";

const skills = [
    { label: "Aplicaciones Web", value: 4 },
    { label: "Landing Pages", value: 6 },
    { label: "Sitios Web", value: 3 },
    { label: "Diseño", value: 7 },
    { label: "Inglés", value: 7 },
    { label: "SEO", value: 6 },
];

export function SkillBars() {
    return (
        <div className="flex flex-col items-center mt-12">
        <h3 className="text-2xl font-bold mb-6 text-primary dark:text-accent">Aptitudes</h3>
        {skills.map((skill, i) => (
            <SkillBar key={i} {...skill} />
        ))}
        </div>
    );
}
