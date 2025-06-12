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
