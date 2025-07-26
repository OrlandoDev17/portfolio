// Componentes
import SectionContainer from "../ui/SectionContainer";
import PrincipleList from "../ui/PrincipleList";
import InfoList from "../ui/InfoList";
// Iconos
import { UserIcon } from "../icons/Icons";
// Framer
import { motion } from "motion/react";
// Variantes
import { fadeInUp } from "@/lib/motionVariants";

export default function About() {
  return (
    <SectionContainer
      id="about"
      icon={UserIcon}
      title="Sobre Mí"
      paragraph="La historia detrás del código y la pasión por crear experiencias digitales excepcionales"
      className="mt-24"
    >
      <div className="grid grid-cols-4 gap-8 my-12">
        <motion.article
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-2 flex flex-col gap-4 p-8 bg-slate-200 dark:bg-slate-800 rounded-xl 
        border-1 border-slate-200 dark:border-slate-400/40 shadow-lg shadow-slate-400 dark:shadow-slate-700"
        >
          <h3 className="text-2xl font-Outfit font-semibold tracking-wide mb-2">
            Mi Trayectoria
          </h3>
          <p className="text-sm text-gray-800 dark:text-gray-300 text-pretty">
            Con más de 3 años de experiencia en desarrollo web, he evolucionado
            de los fundamentos básicos en HTML a dominar tecnologías modernas
            como React, Next.js, JavaScript y TypeScript. Mi especialidad en
            frontend se refleja en el uso de Tailwind CSS, una herramienta que
            me permite construir interfaces escalables con precisión visual y
            velocidad. Me enfoco en mantener el código modular y semántico,
            buscando siempre una base técnica sólida que respalde la estética.
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300 text-pretty">
            Soy profundamente creativo y me apasiona diseñar soluciones con un
            enfoque moderno y minimalista. Mi trabajo se centra en transmitir
            claridad, ritmo visual y profesionalismo desde la primera impresión.
            Me inspiro constantemente viendo a otros programadores compartir sus
            procesos, lo que me permite perfeccionar mis prácticas, adoptar
            patrones avanzados y mantenerme en evolución continua como
            desarrollador.
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300 text-pretty">
            Actualmente mi objetivo es seguir creciendo como frontend técnico, y
            dar el siguiente paso hacia el trabajo remoto. Me motiva poder
            colaborar en proyectos reales desde cualquier parte, aportar valor
            visual y funcional, y seguir construyendo herramientas que reflejen
            tanto mi estilo como mi compromiso con el desarrollo profesional.
          </p>
        </motion.article>
        <article className="col-span-2 row-span-2 flex flex-col gap-6">
          <h3 className="text-2xl font-Outfit font-semibold tracking-wide">
            Principios Profesionales
          </h3>
          <PrincipleList />
        </article>
        <article className="col-span-2 flex justify-center h-fit w-full">
          <InfoList />
        </article>
      </div>
    </SectionContainer>
  );
}
