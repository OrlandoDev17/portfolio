// Constantes
import { INFO_LIST } from "@/lib/constants";
// Framer
import { motion } from "motion/react";
// Variantes
import { containerVariants } from "@/lib/motionVariants";
import AnimatedCounter from "./AnimatedCounter";

export default function InfoList() {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-6"
    >
      {INFO_LIST.map(
        ({ id, counter, title, textColor, bgColor, borderColor }) => (
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`flex flex-col items-center justify-center text-center py-6 px-4 rounded-xl ${bgColor} border-1 ${borderColor}`}
            key={id}
          >
            <AnimatedCounter target={counter} textColor={textColor} />
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {title}
            </span>
          </motion.li>
        )
      )}
    </motion.ul>
  );
}
