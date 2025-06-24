import type { ReactNode } from "react";
import UseIntersectionObserver from "../hooks/useIntersectionObserver";

interface sectionContainerProps {
  className?: string;
  id?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  paragraph?: string;
  children?: ReactNode;
}

export default function SectionContainer({
  className,
  id,
  icon: Icon,
  title,
  paragraph,
  children,
}: sectionContainerProps) {
  const [containerRef, isAnimated] = UseIntersectionObserver<HTMLDivElement>();

  const getAnimationClasses = (animationClass: string) => {
    return `initial-hidden ${isAnimated ? `${animationClass}` : ""}`;
  };

  return (
    <section
      ref={containerRef}
      id={id}
      className={`flex flex-col items-center justify-center px-8 md:px-16 xl:px-32 2xl:px-64 py-14 md:gap-18 gap-12 ${className}`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-4 ${getAnimationClasses} slide-in-bottom`}
      >
        <h2 className="flex items-center gap-2 text-4xl font-semibold dark:text-white">
          {Icon && <Icon className="text-blue-500 size-12" />}
          {title}
        </h2>
        <p className="max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
      {children}
    </section>
  );
}
