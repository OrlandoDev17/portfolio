export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  id: string;
  href: string;
  icon: any;
  color: string;
  borderColor?: string;
  placeholder?: string;
  textColor?: string;
  hoverColor?: string;
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

export interface StackItem {
  title: string;
  icon: any;
  items: any[];
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  itemBgColor?: string;
  darkBgColor?: string;
  darkBorderColor?: string;
  darkTextColor?: string;
  darkItemBgColor?: string;
}

export interface Hobbie {
  hobbie: string;
  icon: any;
  color: string;
}

export interface About {
  title: string;
  text: string;
  icon: any;
  color: string;
}
