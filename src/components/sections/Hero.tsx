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
import { fadeInUp, fadeInLeft, scaleIn } from "@/lib/motionVariants";

export default function Hero() {
  return (
    <section className="max-w-9/12 mx-auto flex justify-between items-center h-[80vh]">
      <article className="flex flex-col gap-6">
        <motion.span
          {...fadeInLeft}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm hover:bg-green-500 dark:hover:bg-green-600 hover:scale-110 transition"
        >
          <BriefcaseIcon />
          Disponible para trabajar
        </motion.span>
        <div className="flex flex-col gap-4">
          <motion.h1
            {...fadeInUp}
            className="text-6xl xl:text-7xl font-extrabold font-Outfit gradient-text"
          >
            Orlando López
          </motion.h1>
          <motion.h2
            {...fadeInUp}
            className="text-3xl xl:text-4xl font-bold font-Outfit mt-2"
          >
            Desarrollador Front-End
          </motion.h2>
          <motion.h3
            {...fadeInLeft}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            Ingeniero en Informática en formación
          </motion.h3>
          <motion.p
            {...fadeInLeft}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-4/5"
          >
            <strong className="text-blue-500">+3 Años</strong> de experiencia
            autodidacta creando experiencias web modernas e intuitivas
          </motion.p>
        </div>
        <motion.div {...fadeInUp} className="flex flex-col gap-6">
          <BorderButton href="/docs/CV.pdf">
            <FileDonwIcon />
            Descargar CV
          </BorderButton>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {SOCIAL_ITEMS.map(({ id, icon, url }) => (
              <motion.li
                key={id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SocialItem icon={icon} url={url} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </article>
      <motion.picture {...scaleIn}>
        <img
          className="w-112 dark:hidden"
          src="/images/orlando-lopez.png"
          alt="Orlando López"
        />
        <img
          className="w-112 hidden dark:block"
          src="/images/orlando-lopez-dark.png"
          alt="Orlando López"
        />
      </motion.picture>
    </section>
  );
}
