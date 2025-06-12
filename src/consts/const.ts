// Tipos
import type { NavbarItem, ProjectItem, SocialItem } from './types';
// Iconos
import {
  AstroBrand,
  GitBrand,
  GitHubBrand,
  GmailBrand,
  LinkedInBrand,
  NextBrand,
  ReactBrand,
  SupabaseBrand,
  TailwindBrand,
  TelegramBrand,
  TypeScriptBrand,
  WhatsappBrand,
} from '../components/Icons';

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    title: 'Inicio',
    href: '#',
  },
  {
    title: 'Proyectos',
    href: '#projects',
  },
  {
    title: 'Stack',
    href: '#stack',
  },
  {
    title: 'Sobre Mí',
    href: '#about',
  },
  {
    title: 'Contacto',
    href: '#contact',
  },
] as const;

export const SOCIAL_MEDIAS: SocialItem[] = [
  {
    id: 'gmail',
    icon: GmailBrand,
    url: 'mailto:orlandodev1707@gmail.com',
    bgColor: 'bg-red-300',
    hoverBgColor: 'hover:bg-red-400',
  },
  {
    id: 'github',
    icon: GitHubBrand,
    url: 'https://github.com/OrlandoDev17',
    bgColor: 'bg-gray-700',
    hoverBgColor: 'hover:bg-gray-900',
  },
  {
    id: 'linkedin',
    icon: LinkedInBrand,
    url: 'www.linkedin.com/in/orlando-lópez1707',
    bgColor: 'bg-blue-300',
    hoverBgColor: 'hover:bg-blue-400',
  },
  {
    id: 'whatsapp',
    icon: WhatsappBrand,
    url: 'https://wa.me/+584242860846',
    bgColor: 'bg-green-500',
    hoverBgColor: 'hover:bg-green-600',
  },
  {
    id: 'telegram',
    icon: TelegramBrand,
    url: 'https://t.me/OrlandoDev17',
    bgColor: 'bg-blue-600',
    hoverBgColor: 'hover:bg-blue-800',
  },
] as const;

export const TAGS = {
  NEXT: {
    icon: NextBrand,
    name: 'NextJs',
  },
  TAILWIND: {
    icon: TailwindBrand,
    name: 'TailwindCss',
  },
  TYPESCRIPT: {
    icon: TypeScriptBrand,
    name: 'TypeScript',
  },
  SUPABASE: {
    icon: SupabaseBrand,
    name: 'Supabase',
  },
  GIT: {
    icon: GitBrand,
    name: 'Git',
  },
  ASTRO: {
    icon: AstroBrand,
    name: 'Astro',
  },
  REACT: {
    icon: ReactBrand,
    name: 'React',
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'goalmind',
    title: 'GoalMind',
    description:
      'GoalMind es una plataforma innovadora para el seguimiento de objetivos, impulsada por IA. Diseñada para ayudar a los usuarios a visualizar su progreso, establecer metas claras y optimizar su productividad con herramientas inteligentes.',
    image: './images/goalmind.png',
    links: {
      demo: 'https://goalmind.vercel.app/',
      code: 'https://github.com/OrlandoDev17/goalmind',
    },
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.GIT],
  },
  {
    id: 'sneakerstore',
    title: 'SneakerStore',
    description:
      'SneakerStore es una tienda en línea especializada en la venta de zapatos. Desarrollada con Astro, React y Tailwind CSS, ofrece una experiencia de usuario moderna, rápida y responsiva para explorar y adquirir los últimos modelos de sneakers.',
    image: './images/sneakerstore.png',
    links: {
      demo: 'https://sneaker-store-nu.vercel.app/',
      code: 'https://github.com/OrlandoDev17/sneaker-store',
    },
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.GIT],
  },
] as const;
