// Tipos
import type { NavItem, SocialItem, Project } from "./index";
// Brands/Iconos
import {
  MailBrand,
  WhatsAppBrand,
  GitHubBrand,
  LinkedInBrand,
  TelegramBrand,
  NextJs,
  React,
  TailwindCss,
  TypeScript,
  Supabase,
  Git,
} from "@/components/icons/Brands";

// Tags

export const TAGS = {
  NEXTJS: {
    name: "Next.js",
    icon: NextJs,
  },
  REACT: {
    name: "React",
    icon: React,
  },
  TAILWINDCSS: {
    name: "Tailwind CSS",
    icon: TailwindCss,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScript,
  },
  SUPABASE: {
    name: "Supabase",
    icon: Supabase,
  },
  GIT: {
    name: "Git",
    icon: Git,
  },
};

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
      TAGS.NEXTJS,
      TAGS.REACT,
      TAGS.TAILWINDCSS,
      TAGS.TYPESCRIPT,
      TAGS.SUPABASE,
      TAGS.GIT,
    ],
    image: "/images/nike-store-desktop.png",
    initialDate: "Julio del 2025",
    finalDate: "En Desarrollo",
    status: "En Desarrollo",
  },
];
