// Constantes
import { PRINCIPLES_LIST } from "@/lib/constants";
// Framer
import { motion } from "motion/react";
// Variantes
import { containerVariants } from "@/lib/motionVariants";

export default function PrincipleList() {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      {PRINCIPLES_LIST.map(({ id, icon: Icon, title, description }) => (
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex items-center gap-4 bg-slate-200 dark:bg-slate-800 p-4 rounded-xl 
          border-1 border-slate-200 dark:border-slate-400/40 shadow-md shadow-slate-400 dark:shadow-slate-700"
          key={id}
        >
          <div className="flex items-center justify-center">
            <Icon className="bg-gradient-to-br from-blue-500 to-violet-700 p-3 rounded-xl size-14 text-sky-300" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-Outfit font-semibold tracking-wide">{title}</h4>
            <p className="text-sm text-gray-800 dark:text-gray-300 text-pretty">
              {description}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
