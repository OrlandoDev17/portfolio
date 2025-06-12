import type { ComponentType, SVGProps } from 'react';

interface SocialButtonProps {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  bgColor: string;
  hoverBgColor: string;
}

export default function SocialButton({
  href,
  icon: Icon,
  bgColor,
  hoverBgColor,
}: SocialButtonProps) {
  return (
    <li className="list-none">
      <a
        className={`${bgColor} p-2 flex items-center justify-centers rounded-lg ${hoverBgColor} hover:scale-110 transition `}
        href={href}
        target="_blank"
        rel="noopener norreferer"
      >
        <Icon className="size-8" />
      </a>
    </li>
  );
}
