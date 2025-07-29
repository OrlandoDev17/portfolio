// Tipos
import type {
  NavItem,
  SocialItem,
  Project,
  Tech,
  Principle,
  Info,
  ContactCard,
} from "./index";
// Brands/Iconos
import {
  MailBrand,
  WhatsAppBrand,
  GitHubBrand,
  LinkedInBrand,
  TelegramBrand,
} from "@/components/icons/Brands";
import {
  NotebookIcon,
  PuzzleIcon,
  RightLineIcon,
  RulerIcon,
  SearchIcon,
} from "@/components/icons/Icons";
import {
  HTML,
  CSS,
  JS,
  TS,
  React,
  NextJs,
  Tailwind,
  Supabase,
  Git,
  Vercel,
  Astro,
  Framer,
  Windsurf,
  Figma,
  PNPM,
  MySQL,
  PostgreSQL,
  NodeJs,
  Python,
  Clerk,
  Firebase,
  NPM,
} from "@/components/icons/Tech";

// Constantes
export const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Inicio",
    href: "#",
  },
  {
    id: "projects",
    label: "Proyectos",
    href: "#projects",
  },
  {
    id: "stack",
    label: "Stack",
    href: "#stack",
  },
  {
    id: "about",
    label: "Sobre mí",
    href: "#about",
  },
  {
    id: "contact",
    label: "Contacto",
    href: "#contact",
  },
];

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: "email",
    icon: MailBrand,
    url: "mailto:orlandodev1707@gmail.com",
  },
  {
    id: "whatsapp",
    icon: WhatsAppBrand,
    url: "https://wa.me/+584242860846",
  },
  {
    id: "github",
    icon: GitHubBrand,
    url: "https://github.com/OrlandoDev17",
  },
  {
    id: "linkedin",
    icon: LinkedInBrand,
    url: "https://www.linkedin.com/in/orlando-lópez1707",
  },
  {
    id: "telegram",
    icon: TelegramBrand,
    url: "https://t.me/OrlandoDev17",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "nike-store",
    title: "Nike Store",
    description:
      "NikeStore es una tienda digital inspirada en la estética de Nike, diseñada para ofrecer una experiencia de compra moderna, fluida y responsiva. El catálogo incorpora colecciones emblemáticas, filtros interactivos, sliders promocionales y componentes visuales llamativos — todo construido bajo una arquitectura escalable y pensada para el usuario.",
    stack: [
      NextJs,
      Tailwind,
      TS,
      Supabase,
      Vercel,
      Framer,
      Windsurf,
      Figma,
      Git,
    ],
    image: "/images/nike-store-desktop.webp",
    initialDate: "Julio del 2025",
    finalDate: "11 de Julio del 2025",
    status: "En Desarrollo",
    links: {
      github: "https://github.com/OrlandoDev17/nike-ecommerce",
      demo: "https://nike-ecommerce-blue.vercel.app/",
    },
  },
  {
    id: "nexus-chatbot",
    title: "Nexus - Chatbot",
    description:
      "Chatbot conversacional impulsado por inteligencia artificial, construido con la SDK AI de Vercel y múltiples modelos combinados. Diseñado para brindar respuestas precisas en tiempo real, adaptarse a diferentes estilos de conversación y demostrar el potencial de integración avanzada entre frontend y capacidades LLM.",
    stack: [NextJs, Tailwind, TS, Vercel, Git, Windsurf, PNPM, Figma],
    image: "/images/nexus-desktop.webp",
    initialDate: "Junio del 2025",
    finalDate: "9 de Julio del 2025",
    status: "En Producción",
    links: {
      github: "https://github.com/OrlandoDev17/nexus-chatbot",
      demo: "https://nexus-chatbot-nine.vercel.app/",
    },
  },
  {
    id: "sneaker-store",
    title: "SneakerStore",
    description:
      "Tienda digital especializada en zapatillas, desarrollada con Astro, React y Tailwind CSS. Este proyecto destaca por la implementación funcional del carrito de compras, navegación fluida y un diseño modular enfocado en rendimiento y escalabilidad desde el frontend.",
    stack: [Astro, React, Tailwind, JS, Git, Vercel, Windsurf, Figma],
    image: "/images/sneakerstore-desktop.webp",
    initialDate: "Abril del 2025",
    finalDate: "12 de Mayo del 2025",
    status: "En Producción",
    links: {
      github: "https://github.com/OrlandoDev17/sneaker-store",
      demo: "https://sneaker-store-nu.vercel.app/",
    },
  },
  {
    id: "goalmind",
    title: "GoalMind",
    description:
      "GoalMind es una plataforma innovadora para el seguimiento de objetivos, impulsada por IA. Diseñada para ayudar a los usuarios a visualizar su progreso, establecer metas claras y optimizar su productividad con herramientas inteligentes.",
    stack: [NextJs, CSS, TS, Git, Vercel, Windsurf, PNPM, Supabase],
    image: "/images/goalmind-desktop.webp",
    initialDate: "Mayo del 2025",
    finalDate: "23 de Mayo del 2025",
    status: "En Pausa",
    links: {
      github: "https://github.com/OrlandoDev17/goalmind",
      demo: "https://goalmind.vercel.app/",
    },
  },
];

export const TECH_STACK: Tech[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [NextJs, React, Tailwind, TS, JS, Astro, HTML, CSS, Framer, Figma],
  },
  {
    id: "backend",
    title: "Backend",
    items: [Supabase, MySQL, PostgreSQL, NodeJs, Python, Clerk, Firebase],
  },
  {
    id: "tools",
    title: "Herramientas",
    items: [Figma, Git, Vercel, PNPM, NPM, Windsurf],
  },
];

export const PRINCIPLES_LIST: Principle[] = [
  {
    id: "1",
    icon: PuzzleIcon,
    title: "Modularidad Estructural",
    description:
      "Divido cada funcionalidad en componentes pequeños, reutilizables y fáciles de mantener.",
  },
  {
    id: "2",
    icon: NotebookIcon,
    title: "Código Autoexplicativo",
    description:
      "Uso nombres semánticos y estructuras claras para que el código se entienda sin depender de comentarios.",
  },
  {
    id: "3",
    icon: RulerIcon,
    title: "Consistencia Visual",
    description:
      "Mantengo tipografía, colores y ritmo editorial alineados para lograr una experiencia coherente.",
  },
  {
    id: "4",
    icon: RightLineIcon,
    title: "Enfoque Lineal",
    description:
      "Prefiero cerrar una sección antes de avanzar, para asegurar fluidez y profundidad en cada entrega.",
  },
  {
    id: "5",
    icon: SearchIcon,
    title: "Legibilidad como Prioridad",
    description:
      "Escribo código claro, ordenado y fácil de leer, tanto para mí como para otros desarrolladores.",
  },
];

export const INFO_LIST: Info[] = [
  {
    id: "1",
    counter: 3,
    title: "Años de experiencia",
    textColor: "text-sky-600",
    bgColor:
      "bg-gradient-to-br from-blue-500/20 via-violet-700/20 to-violet-800/20",
    borderColor: "border-blue-500/50",
  },
  {
    id: "1",
    counter: 4,
    title: "Proyectos Realizados",
    textColor: "text-violet-500",
    bgColor: "bg-gradient-to-br from-violet-800/20 to-red-500/20",
    borderColor: "border-violet-500/50",
  },
  {
    id: "1",
    counter: 10,
    title: "Tecnologías Aprendidas",
    textColor: "text-red-500",
    bgColor:
      "bg-gradient-to-br from-red-500/20 via-red-400/20 to-orange-400/20",
    borderColor: "border-red-500/50",
  },
];

export const CONTACT_CARDS: ContactCard[] = [
  {
    id: "1",
    icon: MailBrand,
    title: "Correo Electronico",
    value: "orlandodev1707@gmail.com",
    button: {
      label: "Enviar Email",
      href: "mailto:orlandodev1707@gmail.com",
    },
    x: -100,
  },
  {
    id: "2",
    icon: WhatsAppBrand,
    title: "WhatsApp",
    value: "+58 4242860846",
    button: {
      label: "WhatsApp",
      href: "https://wa.me/+584242860846",
    },
    y: 100,
  },
  {
    id: "3",
    icon: LinkedInBrand,
    title: "LinkedIn",
    value: "orlando-lópez1707",
    button: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/orlando-lópez1707",
    },
    x: 100,
  },
];
