import type { NavItem } from "@/lib/index";

export default function NavItem({ label, href }: NavItem) {
  return (
    <li>
      <a
        className="2xl:text-xl font-medium hover:text-blue-500 hover:scale-110 transition inline-block"
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
