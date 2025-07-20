// Componentes
import SectionContainer from "@/components/ui/SectionContainer";
import BentoProjects from "../ui/BentoProjects";
// Iconos
import { BriefcaseIcon } from "@/components/icons/Icons";
// Constantes
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      icon={BriefcaseIcon}
      title="Proyectos Personales"
      paragraph="Una selección de mis trabajos más recientes donde aplico las últimas tecnologías y mejores prácticas de desarrollo."
    >
      {PROJECTS.map((project) => (
        <div
          key={project.id}
          className="grid grid-cols-4 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 mb-4 mt-12"
        >
          <BentoProjects {...project} />
        </div>
      ))}
    </SectionContainer>
  );
}
