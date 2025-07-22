// Componentes
import SectionContainer from "../ui/SectionContainer";
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
              <div className="relative w-full overflow-hidden px-0 md:px-6 lg:px-8 mt-1 sm:mt-2">
                {/* Gradiente decorativo izquierda */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-r from-gray-100 dark:from-[#131a2a] to-transparent z-10" />
                {/* Gradiente decorativo derecha */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-gray-100 dark:from-[#131a2a] to-transparent z-10" />
                <div
                  className={`slider-track flex gap-6 sm:gap-10 lg:gap-12 py-2 sm:py-4 ${
                    isBackend ? "animate-slider-reverse" : ""
                  }`}
                  style={{ minWidth: "fit-content" }}
                >
                  {allIcons.map((Icon, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center drop-shadow-xl"
                      style={{ minWidth: 48, minHeight: 48 }}
                    >
                      <Icon className="size-10 sm:size-14 md:size-16 lg:size-20 text-slate-100 bg-gradient-to-br from-blue-500 via-violet-700 to-violet-800 rounded-2xl p-2 sm:p-3 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 border border-white/10 dark:border-slate-700/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
