// Iconos
import { BriefcaseIcon, FileDonwIcon } from "@/components/icons/Icons";
// Componentes
import BorderButton from "@/components/ui/BorderButton";
import SocialItem from "@/components/ui/SocialItem";
// Constantes
import { SOCIAL_ITEMS } from "@/lib/constants";
// Framer
import { motion } from "motion/react";
// Variantes
import {
  fadeInUp,
  fadeInLeft,
  scaleIn,
  containerVariants,
} from "@/lib/motionVariants";

export default function Hero() {
  return (
    <section className="max-w-11/12 md:max-w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center h-auto md:h-[80vh] gap-8 md:gap-0">
      <article className="flex flex-col gap-6">
        <motion.span
          {...fadeInLeft}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs 2xl:text-sm hover:bg-green-500 dark:hover:bg-green-600 hover:scale-110 transition"
        >
          <BriefcaseIcon className="size-4 2xl:size-6" />
          Disponible para trabajar
        </motion.span>
        <div className="flex flex-col gap-4">
          <motion.h1
            {...fadeInUp}
            className="text-4xl xs:text-6xl 2xl:text-7xl font-extrabold font-Outfit gradient-text"
          >
            Orlando López
          </motion.h1>
          <motion.h2
            {...fadeInUp}
            className="text-2xl xs:text-3xl 2xl:text-4xl font-bold font-Outfit mt-2"
          >
            Desarrollador Front-End
          </motion.h2>
          <motion.h3
            {...fadeInLeft}
            transition={{ delay: 0.2 }}
            className="text-base xs:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300"
          >
            Ingeniero en Informática en formación
          </motion.h3>
          <motion.p
            {...fadeInLeft}
            transition={{ delay: 0.4 }}
            className="text-base xs:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300 md:max-w-4/5"
          >
            <strong className="text-blue-500">+3 Años</strong> de experiencia
            autodidacta creando experiencias web modernas e intuitivas
          </motion.p>
        </div>
        <motion.div {...fadeInUp} className="flex flex-col gap-6">
          <BorderButton href="/docs/CV.pdf">
            <FileDonwIcon className="size-5 2xl:size-6" />
            Descargar CV
          </BorderButton>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {SOCIAL_ITEMS.map(({ id, icon, url }) => (
              <motion.li
                key={id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SocialItem icon={icon} url={url} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </article>
      <motion.picture
        {...scaleIn}
        className="w-full flex justify-center md:justify-end items-center md:w-auto md:z-10"
      >
        <img
          className="block w-full max-w-[18rem] md:max-w-[28rem] h-auto dark:hidden"
          src="/images/orlando-lopez.png"
          alt="Orlando López"
        />
        <img
          className="w-full max-w-[18rem] md:max-w-[28rem] h-auto hidden dark:block"
          src="/images/orlando-lopez-dark.png"
          alt="Orlando López"
        />
      </motion.picture>
    </section>
  );
}
