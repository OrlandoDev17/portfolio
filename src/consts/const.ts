// Tipos
import type {
  Field,
  Hobbie,
  NavbarItem,
  ProjectItem,
  Skill,
  SocialItem,
  StackItem,
} from "./types";
// Iconos
import {
  AstroBrand,
  BookIcon,
  ClerkBrand,
  ClockIcon,
  CompassIcon,
  CSSBrand,
  DataBaseIcon,
  FigmaBrand,
  GamepadIcon,
  GitBrand,
  GitHubBrand,
  GmailBrand,
  HeartIcon,
  HTMLBrand,
  IdeaIcon,
  IllustratorBrand,
  JavaScriptBrand,
  LinkedInBrand,
  MobileIcon,
  MySqlBrand,
  NextBrand,
  NodeBrand,
  OutTerminal,
  PnpmBrand,
  ReactBrand,
  ScreenIcon,
  SupabaseBrand,
  TailwindBrand,
  TelegramBrand,
  TerminalIcon,
  TrophyIcon,
  TypeScriptBrand,
  UsersIcon,
  VercelBrand,
  VsCodeBrand,
  WebIcon,
  WhatsappBrand,
  WWWICon,
} from "../components/Icons";

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    title: "Inicio",
    href: "#",
  },
  {
    title: "Proyectos",
    href: "#projects",
  },
  {
    title: "Stack",
    href: "#stack",
  },
  {
    title: "Sobre Mí",
    href: "#about",
  },
  {
    title: "Contacto",
    href: "#contact",
  },
] as const;

export const SOCIAL_MEDIAS: SocialItem[] = [
  {
    id: "gmail",
    icon: GmailBrand,
    url: "mailto:orlandodev1707@gmail.com",
    bgColor: "bg-red-300",
    hoverBgColor: "hover:bg-red-400",
  },
  {
    id: "github",
    icon: GitHubBrand,
    url: "https://github.com/OrlandoDev17",
    bgColor: "bg-gray-700",
    hoverBgColor: "hover:bg-gray-900",
  },
  {
    id: "linkedin",
    icon: LinkedInBrand,
    url: "https://www.linkedin.com/in/orlando-lópez1707",
    bgColor: "bg-blue-300",
    hoverBgColor: "hover:bg-blue-400",
  },
  {
    id: "whatsapp",
    icon: WhatsappBrand,
    url: "https://wa.me/+584242860846",
    bgColor: "bg-green-500",
    hoverBgColor: "hover:bg-green-600",
  },
  {
    id: "telegram",
    icon: TelegramBrand,
    url: "https://t.me/OrlandoDev17",
    bgColor: "bg-blue-600",
    hoverBgColor: "hover:bg-blue-800",
  },
] as const;

export const TAGS = {
  NEXT: {
    icon: NextBrand,
    name: "NextJs",
  },
  TAILWIND: {
    icon: TailwindBrand,
    name: "TailwindCss",
  },
  TYPESCRIPT: {
    icon: TypeScriptBrand,
    name: "TypeScript",
  },
  SUPABASE: {
    icon: SupabaseBrand,
    name: "Supabase",
  },
  GIT: {
    icon: GitBrand,
    name: "Git",
  },
  GITHUB: {
    icon: GitHubBrand,
    name: "GitHub",
  },
  ASTRO: {
    icon: AstroBrand,
    name: "Astro",
  },
  REACT: {
    icon: ReactBrand,
    name: "React",
  },
  JAVASCRIPT: {
    icon: JavaScriptBrand,
    name: "JavaScript",
  },
  VSCODE: {
    icon: VsCodeBrand,
    name: "VS Code",
  },
  FIGMA: {
    icon: FigmaBrand,
    name: "Figma",
  },
  ILLUSTRATOR: {
    icon: IllustratorBrand,
    name: "Illustrator",
  },
  PNPM: {
    icon: PnpmBrand,
    name: "Pnpm",
  },
  CLERK: {
    icon: ClerkBrand,
    name: "Clerk",
  },
  NODEJS: {
    icon: NodeBrand,
    name: "Node Js",
  },
  MYSQL: {
    icon: MySqlBrand,
    name: "MySql",
  },
  VERCEL: {
    icon: VercelBrand,
    name: "Vercel",
  },
  WWW: {
    icon: WWWICon,
    name: "WWW",
  },
  OUTTERMINAL: {
    icon: OutTerminal,
    name: "Terminal",
  },
  SCREEN: {
    icon: ScreenIcon,
    name: "Screen",
  },
  MOBILE: {
    icon: MobileIcon,
    name: "Responsive Design",
  },
  TERMINAL: {
    icon: TerminalIcon,
    name: "Testing",
  },
  COMPASS: {
    icon: CompassIcon,
    name: "SEO",
  },
  WEB: {
    icon: WebIcon,
    name: "Deployment",
  },
  HTML: {
    icon: HTMLBrand,
    name: "HTML5",
  },
  CSS: {
    icon: CSSBrand,
    name: "CSS3",
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "goalmind",
    title: "GoalMind",
    description:
      "GoalMind es una plataforma innovadora para el seguimiento de objetivos, impulsada por IA. Diseñada para ayudar a los usuarios a visualizar su progreso, establecer metas claras y optimizar su productividad con herramientas inteligentes.",
    image: "./images/goalmind.png",
    links: [
      {
        id: "goalmind-links",
        demo: "https://goalmind.vercel.app/",
        code: "https://github.com/OrlandoDev17/goalmind",
      },
    ],
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.GIT],
    animation: "slide-in-left",
  },
  {
    id: "sneakerstore",
    title: "SneakerStore",
    description:
      "SneakerStore es una tienda en línea especializada en la venta de zapatos. Desarrollada con Astro, React y Tailwind CSS, ofrece una experiencia de usuario moderna, rápida y responsiva para explorar y adquirir los últimos modelos de sneakers.",
    image: "./images/sneakerstore.png",
    links: [
      {
        id: "sneakerstore-links",
        demo: "https://sneakerstore.vercel.app/",
        code: "https://github.com/OrlandoDev17/sneakerstore",
      },
    ],
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.GIT],
    animation: "slide-in-right",
  },
] as const;

export const STACKS: StackItem[] = [
  {
    id: "frontend",
    title: "FrontEnd",
    icon: ScreenIcon,
    tags: [
      TAGS.NEXT,
      TAGS.ASTRO,
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS,
    ],
    textColor: "text-blue-500",
    bgColor: "bg-blue-200",
    borderColor: "border-blue-500",
    itemBgColor: "bg-blue-200/50",
    shadowColor: "shadow-blue-500",
    hoverColor: "hover:bg-blue-700/40",
    darkTextColor: "dark:text-blue-200",
    darkBgColor: "dark:bg-blue-400/50",
    darkItemBgColor: "dark:bg-blue-700/20",
    animation: "slide-in-left",
  },
  {
    id: "tools",
    title: "Herramientas",
    icon: OutTerminal,
    tags: [
      TAGS.GIT,
      TAGS.GITHUB,
      TAGS.FIGMA,
      TAGS.ILLUSTRATOR,
      TAGS.VSCODE,
      TAGS.VERCEL,
      TAGS.PNPM,
    ],
    textColor: "text-violet-500",
    bgColor: "bg-violet-200",
    borderColor: "border-violet-500",
    itemBgColor: "bg-violet-200/50",
    shadowColor: "shadow-violet-500",
    hoverColor: "hover:bg-violet-700/40",
    darkTextColor: "dark:text-violet-200",
    darkBgColor: "dark:bg-violet-400/50",
    darkItemBgColor: "dark:bg-violet-700/20",
    animation: "slide-in-right",
  },
  {
    id: "backend",
    title: "Backend",
    icon: DataBaseIcon,
    tags: [TAGS.NODEJS, TAGS.SUPABASE, TAGS.CLERK, TAGS.MYSQL],
    textColor: "text-green-500",
    bgColor: "bg-green-200",
    borderColor: "border-green-500",
    itemBgColor: "bg-green-200/50",
    shadowColor: "shadow-green-500",
    hoverColor: "hover:bg-green-700/40",
    darkTextColor: "dark:text-green-200",
    darkBgColor: "dark:bg-green-400/50",
    darkItemBgColor: "dark:bg-green-700/20",
    animation: "slide-in-left",
  },
  {
    id: "other",
    title: "Otros",
    icon: WWWICon,
    tags: [TAGS.MOBILE, TAGS.TERMINAL, TAGS.COMPASS, TAGS.WEB],
    textColor: "text-orange-500",
    bgColor: "bg-orange-200",
    borderColor: "border-orange-500",
    itemBgColor: "bg-orange-200/50",
    shadowColor: "shadow-orange-500",
    hoverColor: "hover:bg-orange-700/40",
    darkTextColor: "dark:text-orange-200",
    darkBgColor: "dark:bg-orange-400/50",
    darkItemBgColor: "dark:bg-orange-700/20",
    animation: "slide-in-right",
  },
] as const;

export const HOBBIES: Hobbie[] = [
  {
    icon: BookIcon,
    text: "Aprendizaje continuo y autodidacta",
    color: "text-yellow-500",
  },
  {
    icon: GamepadIcon,
    text: "Amante de los videojuegos y del desarrollo web",
    color: "text-blue-500",
  },
  {
    icon: WWWICon,
    text: "Apasionado al código limpio y buenas practicas",
    color: "text-green-500",
  },
] as const;

export const SKILLS: Skill[] = [
  {
    icon: HeartIcon,
    title: "Pasión por el desarrollo",
    text: "Apasionado por crear experiencias digitales excepcionales y resolver problemas complejos con soluciones elegantes",
    color: "text-red-500",
  },
  {
    icon: BookIcon,
    title: "Aprendizaje Continuo",
    text: "Constantemente explorando nuevas tecnologías y mejores prácticas para mantenerme actualizado en un campo en constante evolución",
    color: "text-blue-500",
  },
  {
    icon: ClockIcon,
    title: "Experiencia Autodidacta",
    text: "Más de 2 años de experiencia autodidacta desarrollando proyectos personales y colaborativos que me han permitido crecer profesionalmente",
    color: "text-green-500",
  },
  {
    icon: TrophyIcon,
    title: "Enfoque en Resultados",
    text: "Comprometido con entregar productos de alta calidad, optimizados y con excelente experiencia de usuario",
    color: "text-yellow-500",
  },
  {
    icon: IdeaIcon,
    title: "Resolución de Problemas",
    text: "Habilidad para analizar problemas complejos y encontrar soluciones creativas y eficientes",
    color: "text-orange-500",
  },
  {
    icon: UsersIcon,
    title: "Trabajo en Equipo",
    text: "Experiencia colaborando en equipos multidisciplinarios, aportando ideas y aprendiendo de otros profesionales",
    color: "text-violet-500",
  },
];

export const FORM_FIELDS: Field[] = [
  {
    id: "name",
    label: "Nombre *",
    placeholder: "Tu nombre completo",
    type: "text",
  },
  {
    id: "email",
    label: "Email *",
    placeholder: "tu@gmail.com",
    type: "email",
  },
  {
    id: "topic",
    label: "Asunto",
    placeholder: "Asunto del mensaje",
    type: "text",
  },
] as const;
