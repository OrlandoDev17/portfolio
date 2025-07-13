// Tipos
import type { NavItem, SocialItem } from "./index";
// Brands/Iconos
import {
  MailBrand,
  WhatsAppBrand,
  GitHubBrand,
  LinkedInBrand,
  TelegramBrand,
} from "@/components/icons/Brands";

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
