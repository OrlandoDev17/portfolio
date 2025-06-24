import NavbarItem from "./NavbarItem";
import { NAVBAR_ITEMS } from "../consts/const";
import ThemeToggle from "./ThemeToggle";
import UseIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Header() {
  const [containerRef, isAnimated] = UseIntersectionObserver<HTMLDivElement>();

  const getAnimationClasses = (animationClass: string) => {
    return `initial-hidden ${isAnimated ? `${animationClass}` : ""}`;
  };

  return (
    <header
      ref={containerRef}
      className="absolute md:fixed top-0 z-100 flex items-center justify-between md:justify-center w-screen mt-2"
    >
      <nav
        className={`nav flex justify-between md:justify-center items-center w-180 gap-8 py-2 px-10 font-medium text-xs md:text-xl bg-gray-50 dark:bg-zinc-800 dark:text-white rounded-full backdrop-blur-2xl ${getAnimationClasses} slide-in-top`}
      >
        <picture className="flex items-center gap-2 md:block">
          <img
            className="size-12"
            src="./logo.svg"
            alt="Logo de Orlando López"
          />
          <span className="text-xl gradient-text font-semibold md:hidden block">
            Portfolio Personal
          </span>
        </picture>
        <ul className="hidden md:flex items-center">
          {NAVBAR_ITEMS.map(({ href, title }, index) => (
            <NavbarItem key={index} href={href} title={title} />
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
