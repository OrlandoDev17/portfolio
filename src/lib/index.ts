import type { ComponentType, ReactNode } from "react";
import type { IconProps } from "../components/icons/Icons";

export interface NavItem {
  id?: string;
  label: string;
  href: string;
}

export interface Buttons {
  children?: ReactNode;
  href: string;
  className?: string;
}

export interface SocialItem {
  id?: string;
  icon: ComponentType<IconProps>;
  url: string;
}

export interface SectionContainer {
  id?: string;
  icon: ComponentType<IconProps>;
  title: string;
  paragraph: string;
  children?: React.ReactNode;
  className?: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  stack: Array<ComponentType<IconProps>>;
  image: string;
  initialDate: string;
  finalDate: string;
  status: string;
  links: {
    github: string;
    demo: string;
  };
}

export interface Tech {
  id?: string;
  title: string;
  items: ComponentType<IconProps>[];
}

export interface Principle {
  id?: string;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export interface Info {
  id?: string;
  counter: number;
  title: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
}

export interface ContactCard {
  id?: string;
  icon: ComponentType<IconProps>;
  title: string;
  value: string;
  button: {
    label: string;
    href: string;
  };
}
