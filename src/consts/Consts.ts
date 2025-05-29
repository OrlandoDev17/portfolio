// Tipos
import type { NavItem } from '../types/Types';
import type { SocialLink } from '../types/Types';

// Iconos
import MailIcon from '../icons/Mail.astro';
import GitHubIcon from '../icons/GitHub.astro';
import LinkedInIcon from '../icons/LinkedIn.astro';
import WhatsappIcon from '../icons/Whatsapp.astro';
import TelegramIcon from '../icons/Telegram.astro';

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
