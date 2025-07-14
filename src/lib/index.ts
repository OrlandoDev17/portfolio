import type { ComponentType } from "react";
import type { IconProps } from "../components/icons/Icons";

export interface NavItem {
  id?: string;
  label: string;
  href: string;
}

export interface BorderButton {
  children?: React.ReactNode;
  href: string;
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
}

export interface TAGS {
  name: string;
  icon: ComponentType<IconProps>;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  stack: TAGS[];
  image: string;
  initialDate: string;
  finalDate: string;
  status: string;
}
