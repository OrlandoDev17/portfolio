// Tipos
import type { Buttons } from "@/lib/index";

export default function GradientButton({ href, children, className }: Buttons) {
  return (
    <a
      className={`flex w-fit items-center gap-3 px-4 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 via-violet-500 to-violet-700
        hover:saturate-200 hover:-translate-y-1 hover:scale-110 transition ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
