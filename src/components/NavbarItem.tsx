import type { JSX } from "react";

interface itemProps {
  href: string;
  title: string;
}

export default function NavbarItem({ href, title }: itemProps): JSX.Element {
  return (
    <li>
      <a
        className="relative block px-2 py-2 transition hover:text-blue-500 hover:scale-110"
        aria-label={title}
        href={href}
      >
        {title}
      </a>
    </li>
  );
}
