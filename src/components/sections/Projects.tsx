// Componentes
import SectionContainer from "@/components/ui/SectionContainer";
import ProjectsContainer from "../ui/ProjectsContainer";
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
      className="mt-24 2xl:mt-12"
    >
      {PROJECTS.map((project) => (
        <ProjectsContainer key={project.id} project={project} />
      ))}
    </SectionContainer>
  );
}
