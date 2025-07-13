// Tipos
import type { SectionContainer } from "@/lib/index";

export default function SectionContainer({
  id,
  icon: Icon,
  title,
  paragraph,
  children,
}: SectionContainer) {
  return (
    <section
      id={id}
      className="max-w-9/12 mx-auto flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-4 items-center">
        <h2 className="flex items-center gap-3 text-3xl font-semibold">
          <Icon className="size-10 text-blue-500" />
          {title}
        </h2>
        <p className="max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
      {children}
    </section>
  );
}
