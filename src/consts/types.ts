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

export interface StackItem {
  id: string;
  title: string;
  icon: ComponentType;
  tags: {
    icon: ComponentType;
    name: string;
  }[];
  textColor: string;
  bgColor: string;
  borderColor: string;
  itemBgColor: string;
  shadowColor: string;
  hoverColor: string;
  darkTextColor: string;
  darkBgColor: string;
  darkItemBgColor: string;
  darkHoverColor?: string;
}

export interface Hobbie {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export interface Skill {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  color: string;
}
