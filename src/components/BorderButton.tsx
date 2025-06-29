import type { BorderButtonProps } from "../consts/types";

export default function BorderButton({
  href,
  className,
  children,
  onClick,
}: BorderButtonProps) {
  return (
    <button onClick={onClick} type="button">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={`flex items-center gap-3 h-12 py-2 px-4 rounded-lg text-base md:text-lg tracking-wide font-medium border-2 border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition ${className}`}
      >
        {children}
      </a>
    </button>
  );
}
