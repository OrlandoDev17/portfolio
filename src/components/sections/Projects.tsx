// Componentes
import SectionContainer from "@/components/ui/SectionContainer";
import ProjectContainer from "@/components/ui/ProjectContainer";
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
      <div className="grid grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectContainer key={project.id} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
}
