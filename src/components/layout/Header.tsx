// Componentes
import ToggleTheme from "@/components/ui/ToggleTheme";
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";
// Constantes
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="nav fixed top-0 w-full py-2 z-50">
      <div className="flex items-center justify-between max-w-11/12 md:max-w-9/12 mx-auto">
        <picture className="flex flex-grow basis-0">
          <img
            className="size-14"
            src="/logo.svg"
            alt="Logo de Orlando López"
          />
        </picture>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map(({ id, label, href }) => (
              <NavItem key={id} label={label} href={href} />
            ))}
          </ul>
        </nav>
        <nav className="flex-grow basis-0 text-end">
          <NavMenu />
          <ToggleTheme />
        </nav>
      </div>
    </header>
  );
}
