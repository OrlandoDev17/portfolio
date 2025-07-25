// Componentes
import ToggleTheme from "@/components/ui/ToggleTheme";
import NavItem from "./NavItem";
// Constantes
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="nav fixed top-0 w-full py-2 z-50">
      <div className="flex items-center justify-between max-w-9/12 mx-auto">
        <picture className="flex flex-grow basis-0">
          <img
            className="size-14"
            src="/logo.svg"
            alt="Logo de Orlando López"
          />
        </picture>
        <nav>
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map(({ id, label, href }) => (
              <NavItem key={id} label={label} href={href} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-4 flex-grow basis-0 ">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
