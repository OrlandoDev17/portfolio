// Tipos
import type { SectionContainer } from "@/lib/index";
// Framer
import { motion } from "motion/react";
// Variantes
import { fadeInUp } from "@/lib/motionVariants";

export default function SectionContainer({
  id,
  icon: Icon,
  title,
  paragraph,
  children,
  className,
}: SectionContainer) {
  return (
    <section
      id={id}
      className={`relative max-w-11/12 2xl:max-w-9/12 mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <motion.div
        {...fadeInUp}
        className="flex flex-col gap-4 items-center min-w-2xl"
      >
        <h2 className="flex items-center gap-3 text-2xl xs:text-3xl font-semibold">
          <Icon className="size-8 xs:size-10 text-blue-500" />
          {title}
        </h2>
        <p className="max-w-sm xs:max-w-md md:max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </motion.div>
      {children}
    </section>
  );
}
