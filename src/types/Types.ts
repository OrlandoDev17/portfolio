export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  id: string;
  href: string;
  icon: any;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  links?: {
    demo: string;
    code: string;
  }[]; // Cambiado a array
  tags?: { icon: any; color?: string; name?: string }[];
}
