// Componentes
import ToggleTheme from "@/components/ui/ToggleTheme";
import NavItem from "./NavItem";
// Constantes
import { NAV_ITEMS } from "@/lib/constants";
// Iconos
import { LanguageIcon } from "@/components/icons/Icons";

export default function Header() {
  return (
    <header className="nav fixed top-0 w-full py-2 z-50">
      <div className="flex items-center justify-between max-w-10/12 mx-auto">
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
          <LanguageIcon className="size-10 p-2 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-110 transition" />
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
