import type { ComponentType } from 'react';

export interface NavbarItem {
  title: string;
  href: string;
}

export interface SocialItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  bgColor: string;
  hoverBgColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  links: {
    demo: string;
    code: string;
  };
  tags: {
    icon?: ComponentType;
    name?: string;
  }[];
}
