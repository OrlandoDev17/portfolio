// Tipos
import type { NavbarItem, SocialItem } from './types';
// Iconos
import {
  GitHubBrand,
  GmailBrand,
  LinkedInBrand,
  TelegramBrand,
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
