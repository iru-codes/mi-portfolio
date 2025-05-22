import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Landing Page Modelo",
    description: "Una landing page de prueba que usa el servicio de backend de Firebase para el hosting.",
    description2: "Esta Web estática de ejemplo está hecha con HTML5/CSS3 y Javascript vanilla y cuenta con diseño responsive usando Flex. Usé el servicio de Hosting de Firebase para alojarla.",
    demoUrl: "https://landing-page-modelo.web.app/",
    codeUrl: "https://github.com/iru-codes/landing-modelo",
    image: "/proyectos/tu-landing-page.webp"
  },
  {
    title: "Rpg Diceroll App",
    description: "La primera aplicación web que desarrollé, usa el servicio de backend de Netlify para el hosting.",
    description2: "Adaptando un proyecto anterior, utilicé React + Vite con tipado TypeScript para convertirla en una aplicación web. Mantuve CSS clásico para los estilos y usé el servicio de Hosting de Netlify para alojarla. Es responsive combinando Flex para textos y títulos con Grid para la botonera de dados.",
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
