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
      className={`max-w-9/12 mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center">
        <h2 className="flex items-center gap-3 text-3xl font-semibold">
          <Icon className="size-10 text-blue-500" />
          {title}
        </h2>
        <p className="max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </motion.div>
      {children}
    </section>
  );
}
