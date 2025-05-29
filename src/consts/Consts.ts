// Tipos
import type { NavItem, SocialLink, Project } from '../types/Types';

// Iconos
import MailIcon from '../icons/Mail.astro';
import GitHubIcon from '../icons/GitHub.astro';
import LinkedInIcon from '../icons/LinkedIn.astro';
import WhatsappIcon from '../icons/Whatsapp.astro';
import TelegramIcon from '../icons/Telegram.astro';
import NextJsIcon from '../icons/NextJs.astro';
import AstroBrandIcon from '../icons/AstroBrand.astro';
import TypeScriptIcon from '../icons/TypeScript.astro';
import TailwindIcon from '../icons/Tailwind.astro';
import SupabaseIcon from '../icons/Supabase.astro';
import GitIcon from '../icons/Git.astro';
import ReactIcon from '../icons/React.astro';

export const NAV_ITEMS: NavItem[] = [
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

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'mail',
    href: 'mailto:orlandodev1707@gmail.com',
    icon: MailIcon,
    color: 'bg-yellow-500',
  },
  {
    id: 'github',
    href: 'https://github.com/OrlandoDev17',
    icon: GitHubIcon,
    color: 'bg-gray-700',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/orlando-lópez1707',
    icon: LinkedInIcon,
    color: 'bg-blue-600',
  },
  {
    id: 'whatsapp',
    href: 'https://wa.me/+584242860846',
    icon: WhatsappIcon,
    color: 'bg-green-500',
  },
  {
    id: 'telegram',
    href: 'https://t.me/OrlandoDev17',
    icon: TelegramIcon,
    color: 'bg-blue-400',
  },
];

export const TAGS = {
  NEXT: {
    name: 'Next.Js',
    icon: NextJsIcon,
    color: 'bg-gray-900',
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroBrandIcon,
    color: 'bg-purple-600',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon,
    color: 'bg-blue-500',
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindIcon,
    color: 'bg-sky-400',
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon,
    color: 'bg-green-500',
  },
  GIT: {
    name: 'Git',
    icon: GitIcon,
    color: 'bg-orange-500',
  },
  REACT: {
    name: 'ReactJs',
    icon: ReactIcon,
    color: 'bg-blue-600',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'GoalMind',
    description:
      'GoalMind es una plataforma innovadora para el seguimiento de objetivos, impulsada por IA. Diseñada para ayudar a los usuarios a visualizar su progreso, establecer metas claras y optimizar su productividad con herramientas inteligentes.',
    image: './images/goalmind.png',
    links: [
      {
        demo: 'https://goalmind.vercel.app/',
        code: 'https://github.com/OrlandoDev17/goalmind',
      },
    ],
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.GIT],
  },
  {
    id: 2,
    title: 'SneakerStore',
    description:
      'SneakerStore es una tienda en línea especializada en la venta de zapatos. Desarrollada con Astro, React y Tailwind CSS, ofrece una experiencia de usuario moderna, rápida y responsiva para explorar y adquirir los últimos modelos de sneakers.',
    image: './images/sneakerstore.png',
    links: [
      {
        demo: 'https://sneaker-store-nu.vercel.app/',
        code: 'https://github.com/OrlandoDev17/sneaker-store',
      },
    ],
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.GIT],
  },
];
