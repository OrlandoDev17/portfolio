import type { ReactNode } from 'react';

interface GradientButtonProps {
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function GradientButton({
  href,
  className,
  children,
  onClick,
}: GradientButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={`flex items-center gap-3 h-12 py-2 px-4 rounded-lg text-base md:text-lg tracking-wide font-medium bg-gradient-to-r from-blue-500 via-violet-600 to-violet-700 gradient-animation cursor-pointer text-white hover:brightness-125 
          hover:-translate-y-1 transition ${className}`}
      >
        {children}
      </a>
    </button>
  );
}
