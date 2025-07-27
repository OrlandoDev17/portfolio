//Tipos
import type { Buttons } from "@/lib/index";

export default function BorderButton({ children, href, className }: Buttons) {

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`flex w-fit items-center gap-3 px-4 py-3 border-2 rounded-lg text-sm 2xl:text-base font-medium border-blue-500 text-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition ${className}`}
    >
      {children}
    </a>
  );
}