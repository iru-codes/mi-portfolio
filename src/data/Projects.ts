import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Landing Page Modelo",
    description: "Una landing page de prueba que usa el servicio de backend de Firebase para el hosting. Esta Web estática de ejemplo está hecha con HTML5/CSS3 y Javascript vanilla. Usé el servicio de Hosting de Firebase para alojarla.",
    demoUrl: "https://landing-page-modelo.web.app/",
    codeUrl: "https://github.com/iru-codes/landing-modelo",
    image: "/proyectos/tu-landing-page.webp"
  },
  {
    title: "Rpg Diceroll App",
    description: "La primera aplicación web que desarrollé, usa el servicio de backend de Netlify para el hosting.",
    demoUrl: "https://rpg-diceroll-app.netlify.app/",
    codeUrl: "https://github.com/iru-codes/dice-app-react",
    image: "/proyectos/rpg-diceroll-app.webp"
  },
  {
    title: "Blog de Escritura",
    description: "Este proyecto se encuentra en construcción.",
    demoUrl: "#",
    codeUrl: "#",
    image: "/proyectos/en-construccion.webp"
  }
];
