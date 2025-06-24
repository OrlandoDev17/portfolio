import { useState } from "react";
import { MenuIcon, XIcon } from "./Icons";
import { NAVBAR_ITEMS } from "../consts/const";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <button
        className="relative flex md:hidden p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition dark:hover:bg-gray-900 group"
        onClick={handleMenu}
      >
        {isMenuOpen ? (
          <XIcon className="size-8 group-hover:text-red-500 group-hover:rotate-90 transition duration-200" />
        ) : (
          <MenuIcon className="size-8 group-hover:text-green-500 group-hover:scale-110 transition duration-200" />
        )}
      </button>

      {isMenuOpen && (
        <div className="flex flex-col items-start justify-center bg-white dark:bg-zinc-800 w-screen h-[90vh] absolute inset-0 top-[100%] left-[50%] translate-x-[-50%] border-y-1 border-gray-400 px-8">
          <ul className="flex flex-col space-y-4 w-full">
            {NAVBAR_ITEMS.map(({ href, title }, index) => (
              <li key={index}>
                <a
                  className="flex items-center space-x-3 py-3 px-4 rounded-xl text-lg hover:bg-blue-200 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  href={href}
                  onClick={handleMenu}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
