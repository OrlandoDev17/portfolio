import SectionContainer from "../components/SectionContainer";
import { BriefCaseIcon, MessageIcon } from "../components/Icons";
import ProjectCard from "../components/ProjectCard";
import GradientButton from "../components/GradientButton";

import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Usa un nombre consistente (minúscula 'u')

import { PROJECTS } from "../consts/const";

// Importamos los tipos desde el archivo de tipos
import type { ProjectItem as ProjectItemType } from "../consts/types";

// Extendemos el tipo ProjectItem para incluir la propiedad de animación
interface ProjectItem extends Omit<ProjectItemType, "animation"> {
  animation: string; // El nombre de la clase CSS para la animación
}

export default function Projects() {
  // Adjuntamos el Intersection Observer al propio elemento <ul>.
  // Cuando la lista se haga visible, 'isAnimated' será true.
  const [listRef, isAnimated] = useIntersectionObserver<HTMLUListElement>();

  // Esta función auxiliar toma la clase de animación y la aplica
  // basándose en si el elemento observado (el <ul>) está animado.
  // También incluye la clase 'initial-hidden' para evitar que los elementos se muestren antes de la animación.
  const getAnimationClasses = (
    animationClass: string,
    delayMs: number = 0
  ): string => {
    // Para un retraso escalonado, necesitamos aplicar 'delay-X' aquí.
    const delayClass = delayMs > 0 ? `delay-${delayMs}` : "";
    return `initial-hidden ${
      isAnimated ? `${animationClass} ${delayClass}` : ""
    }`;
  };

  // Tipamos el array PROJECTS basándonos en nuestra interfaz definida
  const typedProjects: ProjectItem[] = PROJECTS as unknown as ProjectItem[];

  return (
    <SectionContainer
      id="projects"
      className="dark:bg-slate-900 pt-12"
      icon={BriefCaseIcon}
      title="Proyectos Personales"
      paragraph="Una selección de mis trabajos más recientes donde aplico las últimas tecnologías y mejores prácticas de desarrollo."
    >
      {/* Asigna la ref al elemento <ul> */}
      <ul
        ref={listRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 ${
          isAnimated ? "fade" : "initial-hidden"
        }`}
      >
        {typedProjects.map(
          (
            { id, title, description, image, tags, links, animation },
            index
          ) => (
            <ProjectCard
              key={id}
              image={image}
              title={title}
              description={description}
              tags={tags}
              links={links}
              className={getAnimationClasses(animation, (index + 1) * 100)}
            />
          )
        )}
      </ul>

      <div
        className={`flex flex-col justify-center items-center gap-4 mt-12 ${getAnimationClasses} slide-in-top`}
      >
        <span className="text-lg text-gray-600 dark:text-gray-300">
          ¿Quieres ver más proyectos o colaborar en algo nuevo?
        </span>
        <GradientButton>
          <MessageIcon />
          Hablemos de tu proyecto
        </GradientButton>
      </div>
    </SectionContainer>
  );
}
