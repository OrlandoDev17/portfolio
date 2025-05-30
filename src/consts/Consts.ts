// Tipos
import type { NavItem, SocialLink, Project, StackItem } from '../types/Types';

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
import ScreenIcon from '../icons/Screen.astro';
import JavaScriptIcon from '../icons/JavaScript.astro';
import CodeIcon from '../icons/Code.astro';
import CompassIcon from '../icons/Compass.astro';
import HTMLIcon from '../icons/HTML.astro';
import CSSIcon from '../icons/CSS.astro';
import FigmaIcon from '../icons/Figma.astro';
import IllustratorIcon from '../icons/Illustrator.astro';
import MobileIcon from '../icons/Mobile.astro';
import PnpmIcon from '../icons/Pnpm.astro';
import TestingIcon from '../icons/Testing.astro';
import VsCodeIcon from '../icons/VsCode.astro';
import WebIcon from '../icons/Web.astro';
import ToolsIcon from '../icons/Tools.astro';
import ClerkIcon from '../icons/Clerk.astro';
import GitHubBrandIcon from '../icons/GitHubBrand.astro';

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
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon,
    color: 'bg-yellow-500',
  },
  CODE: {
    name: 'Code',
    icon: CodeIcon,
    color: 'bg-gray-800',
  },
  SCREEN: {
    name: 'Frontend',
    icon: ScreenIcon,
    color: 'bg-blue-400',
  },
  COMPASS: {
    name: 'SEO',
    icon: CompassIcon,
    color: 'bg-pink-500',
  },
  HTML: {
    name: 'HTML5',
    icon: HTMLIcon,
    color: 'bg-orange-600',
  },
  CSS: {
    name: 'CSS3',
    icon: CSSIcon,
    color: 'bg-blue-600',
  },
  FIGMA: {
    name: 'Figma',
    icon: FigmaIcon,
    color: 'bg-pink-400',
  },
  ILLUSTRATOR: {
    name: 'Illustrator',
    icon: IllustratorIcon,
    color: 'bg-orange-400',
  },
  MOBILE: {
    name: 'Responsive Design',
    icon: MobileIcon,
    color: 'bg-green-400',
  },
  PNPM: {
    name: 'Pnpm',
    icon: PnpmIcon,
    color: 'bg-yellow-600',
  },
  TESTING: {
    name: 'Testing',
    icon: TestingIcon,
    color: 'bg-red-400',
  },
  VSCODE: {
    name: 'VS Code',
    icon: VsCodeIcon,
    color: 'bg-blue-700',
  },
  WEB: {
    name: 'Deployment',
    icon: WebIcon,
    color: 'bg-indigo-500',
  },
  CLERK: {
    name: 'Clerk',
    icon: ClerkIcon,
  },
  GITHUB: {
    name: 'GitHub',
    icon: GitHubBrandIcon,
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

export const STACK_CONTAINER: StackItem[] = [
  {
    title: 'Frontend',
    icon: ScreenIcon,
    items: [
      TAGS.NEXT,
      TAGS.ASTRO,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS,
    ],
    bgColor: 'bg-blue-200',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-500',
    itemBgColor: 'bg-blue-100/50',
    darkBgColor: 'dark:bg-blue-700',
    darkBorderColor: 'dark:border-blue-700',
    darkTextColor: 'dark:text-blue-200',
    darkItemBgColor: 'dark:bg-blue-700/20',
  },
  {
    title: 'Herramientas',
    icon: ToolsIcon,
    items: [
      TAGS.GIT,
      TAGS.VSCODE,
      TAGS.FIGMA,
      TAGS.ILLUSTRATOR,
      TAGS.PNPM,
      TAGS.SUPABASE,
      TAGS.CLERK,
      TAGS.GITHUB,
    ],
    bgColor: 'bg-violet-200',
    borderColor: 'border-violet-500',
    textColor: 'text-violet-500',
    itemBgColor: 'bg-violet-100/50',
    darkBgColor: 'dark:bg-violet-700',
    darkBorderColor: 'dark:border-violet-700',
    darkTextColor: 'dark:text-violet-200',
    darkItemBgColor: 'dark:bg-violet-700/20',
  },
  {
    title: 'Otros',
    icon: WebIcon,
    items: [TAGS.MOBILE, TAGS.TESTING, TAGS.COMPASS, TAGS.WEB],
    bgColor: 'bg-orange-200',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-500',
    itemBgColor: 'bg-orange-100/50',
    darkBgColor: 'dark:bg-orange-700',
    darkBorderColor: 'dark:border-orange-700',
    darkTextColor: 'dark:text-orange-200',
    darkItemBgColor: 'dark:bg-orange-700/20',
  },
] as const;
