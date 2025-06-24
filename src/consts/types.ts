import type { ComponentType, SVGProps, ReactNode } from "react";

// Tipos generales
export interface IconProps {
  className?: string;
}

// Tipos de componentes
export interface SocialButtonProps {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  bgColor: string;
  hoverBgColor: string;
}

export interface GradientButtonProps {
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export interface BorderButtonProps {
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export interface ModalFormProps {
  handleChangeVisibility: () => void;
  isVisible: boolean;
}

export interface SectionContainerProps {
  className?: string;
  id?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title?: string;
  paragraph?: string;
  children?: ReactNode;
}

// Tipos de datos
export interface Tag {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
}

export interface ProjectLink {
  id: string;
  demo: string;
  code: string;
}

export type ProjectLinks = ProjectLink[];

export interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  links: ProjectLinks;
  animation?: string;
  className?: string;
  ref?: React.Ref<HTMLLIElement>;
}

export interface StackCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  tags: Tag[];
  textColor: string;
  bgColor: string;
  borderColor: string;
  itemBgColor: string;
  shadowColor: string;
  hoverColor: string;
  darkTextColor: string;
  darkBgColor: string;
  darkItemBgColor: string;
  animation?: string;
}

// Tipos de proyecto
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLinks;
  tags: Tag[];
  animation?: string;
}

export interface ProjectTag {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

// Tipos existentes
export interface NavbarItem {
  title: string;
  href: string;
}

export interface SocialItem {
  id: string;
  icon: ComponentType<{ className?: string }>;
  url: string;
  bgColor: string;
  hoverBgColor: string;
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
  animation?: string;
}

export interface Hobbie {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export interface Skill {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  color: string;
  className?: string;
}

export interface Field {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}
