import React from "react";
// Tipos
import type { Project } from "@/lib/index";
// Iconos/Brands
import { ActivyIcon, CodeIcon, TargetIcon, RokectIcon } from "../icons/Icons";
import { GitHubBrand } from "../icons/Brands";
// Componentes
import GradientButton from "./GradientButton";
import BorderButton from "./BorderButton";
// Framer
import { motion } from "motion/react";
// Variants
import { fadeInUp, fadeInLeft, fadeInTopLeft } from "@/lib/motionVariants";

export default function BentoProjects({
  title,
  description,
  image,
  stack,
  finalDate,
  initialDate,
  status,
  links,
}: Project) {
  const bentoStyles = {
    imageTile:
      "bg-slate-300 dark:bg-slate-800 border border-slate-200 dark:border-slate-400/40 rounded-md p-6 flex flex-col items-start gap-4 hover:scale-102 transition",
    descriptionTile:
      "bg-violet-100 dark:bg-violet-700/20 border border-violet-200 dark:border-violet-700 rounded-md p-6 flex flex-col gap-3 hover:scale-102 transition",
    stackTile:
      "bg-sky-100 dark:bg-sky-900/50 border border-gray-200 dark:border-sky-800/40 rounded-md p-6 flex flex-col gap-3 hover:scale-102 transition",
    dateTile:
      "bg-gradient-to-br from-blue-500 to-violet-700 dark:from-blue-900/50 dark:via-blue-700/20 dark:to-violet-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-6 flex flex-col gap-3 hover:scale-102 transition",
  };

  const bentoPositions = {
    imageTile:
      "xs:col-start-1 xs:row-start-1 xs:col-span-4 xs:row-span-2 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2 2xl:col-start-1 2xl:row-start-1 2xl:col-span-2 2xl:row-span-2 md:h-fit",
    descriptionTile:
      "xs:col-start-1 xs:row-start-3 xs:col-span-4 xs:row-span-1 md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-1 2xl:col-start-3 2xl:row-start-1 2xl:col-span-2 2xl:row-span-1",
    stackTile:
      "xs:col-start-1 xs:row-start-4 xs:col-span-1 xs:row-span-1 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1 2xl:col-start-3 2xl:row-start-2 2xl:col-span-1 2xl:row-span-1 h-fit",
    dateTile:
      " xs:col-start-2 xs:row-start-4 xs:col-span-1 xs:row-span-1 md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1 2xl:col-start-4 2xl:row-start-2 2xl:col-span-1 2xl:row-span-1 h-fit",
  };

  return (
    <>
      {/* 📛 Título + Imagen */}
      <motion.div
        {...fadeInUp}
        className={`${bentoPositions.imageTile} ${bentoStyles.imageTile}`}
      >
        <h2 className="text-3xl font-bold font-Outfit text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        <img
          src={image}
          alt={`Imagen del Proyecto ${title}`}
          className="rounded-md"
        />
        <div className="flex items-end justify-center gap-4 w-full">
          <GradientButton className="px-8" href={links.demo}>
            <RokectIcon className="2xl:size-7 size-5" />
            Demo
          </GradientButton>
          <BorderButton className="px-8" href={links.github}>
            <GitHubBrand className="2xl:size-7 size-5" />
            GitHub
          </BorderButton>
        </div>
      </motion.div>

      {/* 🧠 Descripción */}
      <motion.div
        {...fadeInLeft}
        transition={{ delay: 0.1 }}
        className={`${bentoPositions.descriptionTile} ${bentoStyles.descriptionTile}`}
      >
        <h4 className="flex items-center gap-2 text-xl font-semibold text-violet-800 dark:text-violet-400">
          <TargetIcon className="size-6" />
          Descripción
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </motion.div>

      {/* 🛠 Stack */}
      <motion.div
        {...fadeInTopLeft}
        transition={{ delay: 0.1 }}
        className={`${bentoPositions.stackTile} ${bentoStyles.stackTile}`}
      >
        <h4 className="flex items-center gap-2 text-xl font-semibold text-sky-600 dark:text-sky-400">
          <CodeIcon className="size-6" />
          Stack
        </h4>
        <ul className="grid grid-cols-3 gap-2 w-full place-items-center">
          {stack.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-fit gap-2 bg-sky-500/20 dark:bg-slate-800 p-3 rounded-full hover:bg-sky-500 dark:hover:bg-sky-800 hover:scale-110 transition"
            >
              {React.createElement(item, {
                className:
                  "size-6 2xl:size-8 text-slate-700 dark:text-slate-200",
              })}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 📅 Fechas y Estado */}
      <motion.div
        {...fadeInTopLeft}
        transition={{ delay: 0.1 }}
        className={`${bentoPositions.dateTile} ${bentoStyles.dateTile}`}
      >
        <h4
          className="flex items-center gap-2 text-base 2xl:text-xl font-semibold text-blue-800 
        dark:text-blue-300"
        >
          <ActivyIcon className="size-6" />
          Fechas y Estado
        </h4>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="font-semibold text-blue-800 dark:text-blue-300">
              Fecha Inicial:
            </span>
            <br />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {initialDate}
            </span>
          </li>
          <li>
            <span className="font-semibold text-blue-800 dark:text-blue-300">
              Fecha Final:
            </span>
            <br />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {finalDate}
            </span>
          </li>
          <li className="bg-green-200 dark:bg-green-500/50 px-5 py-2 rounded-full w-fit">
            <span className="text-green-900 dark:text-green-300">{status}</span>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
