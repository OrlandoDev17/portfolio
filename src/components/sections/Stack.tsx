// Componentes
import SectionContainer from "../ui/SectionContainer";
import StackSlider from "./StackSlider";
// Iconos
import { CodeIcon } from "../icons/Icons";
// Constantes
import { TECH_STACK } from "@/lib/constants";

export default function Stack() {
  return (
    <SectionContainer
      id="stack"
      icon={CodeIcon}
      title="Stack Tecnológico"
      paragraph="Herramientas y tecnologías que domino para crear soluciones web modernas y eficientes."
      className="mt-24"
    >
      <div className="flex flex-col gap-8 sm:gap-10 w-full mt-6 sm:mt-8">
        {TECH_STACK.map(({ id, title, items }) => {
          // Repetir íconos suficientes veces para cubrir cualquier ancho (mínimo 3x)
          const allIcons = [...items, ...items, ...items];
          const isBackend = id === "backend";
          return (
            <div key={id} className="w-full">
              <h3 className="text-base sm:text-xl font-bold font-Outfit mb-3 sm:mb-4 ml-1 sm:ml-2 text-blue-700 dark:text-blue-400 tracking-wider uppercase flex items-center gap-1 sm:gap-2">
                <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-violet-600 mr-1 sm:mr-2" />
                {title}
              </h3>
              <div className="relative overflow-hidden px-0 md:px-6 lg:px-8 mt-1 sm:mt-2 w-full md:max-w-full max-w-sm mx-auto">
                {/* Gradiente decorativo izquierda */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-r from-gray-100 dark:from-[#131a2a] to-transparent z-10" />
                {/* Gradiente decorativo derecha */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-gray-100 dark:from-[#131a2a] to-transparent z-10" />
                <StackSlider icons={allIcons} isBackend={isBackend} />
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
