// Tipos
import type { Project } from "@/lib/index";
// Iconos
import { TargetIcon, CodeIcon, ActivyIcon } from "@/components/icons/Icons";

export default function ProjectContainer({
  title,
  description,
  stack,
  image,
  initialDate,
  finalDate,
  status,
}: Project) {
  return (
    <article className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold font-Outfit tracking-wide -mb-4">
        {title}
      </h2>
      <div
        className="flex justify-center px-8 py-4 bg-gray-200 dark:bg-slate-800 rounded-xl shadow-lg 
      shadow-gray-300 dark:shadow-slate-600"
      >
        <img src={image} alt={`Mockup de el proyecto ${title}`} />
      </div>
      <div
        className="flex flex-col gap-2 p-8 bg-white dark:bg-blue-900/20 rounded-xl shadow-lg 
      shadow-gray-300 dark:shadow-slate-600"
      >
        <h3 className="flex items-center gap-2 text-xl font-semibold">
          <TargetIcon className="size-6 text-blue-500" />
          Descripción
        </h3>
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div
          className="flex flex-col gap-2 dark:bg-gradient-to-br dark:from-[#1f1f47] dark:via-[#2a225c] 
        dark:to-[#1b1b2f] py-6 px-4 rounded-xl shadow-lg shadow-gray-300 dark:shadow-slate-600"
        >
          <h4 className="flex items-center gap-2 text-xl font-semibold">
            <CodeIcon className="size-6 text-violet-500" />
            Stack
          </h4>
          <ul className="grid grid-cols-3 gap-2">
            {stack.map((tag, index) => (
              <li
                className="flex items-center justify-center bg-gray-200 dark:bg-blue-900/20 gap-2 p-2 rounded-xl"
                key={index}
              >
                <tag.icon className="size-8" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 dark:bg-gradient-to-br dark:bg-slate-800 py-6 px-4 rounded-xl shadow-lg shadow-gray-300 dark:shadow-slate-600">
          <h4 className="flex items-center gap-2 text-xl font-semibold">
            <ActivyIcon className="size-6 text-blue-500" />
            Estado
          </h4>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Inicio
              </span>
              <span className="font-semibold">{initialDate}</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Ultima Actualización
              </span>
              <span className="font-semibold">{finalDate}</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="font-medium text-green-400 bg-green-800/40 px-4 py-1 rounded-full w-fit">
                {status}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
