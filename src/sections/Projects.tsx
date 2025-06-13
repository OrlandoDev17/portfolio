import SectionContainer from '../components/SectionContainer';
import { BriefCaseIcon, MessageIcon } from '../components/Icons';
import { PROJECTS } from '../consts/const';
import ProjectCard from '../components/ProjectCard';
import GradientButton from '../components/GradientButton';

export default function Projects() {
  // Map tags for each project before rendering
  const mappedTags = PROJECTS.map((project) => ({
    ...project,
    tags: project.tags.map((tag) => ({
      ...tag,
      name: tag.name ?? '',
      icon: tag.icon ?? (() => null),
    })),
  }));
  return (
    <SectionContainer
      id="projects"
      className="dark:bg-slate-900"
      icon={BriefCaseIcon}
      title="Proyectos Personales"
      paragraph="Una selección de mis trabaos más recientes donde aplico las últimas tecnologías y mejores prácticas de desarrollo"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {mappedTags.map(({ id, title, description, image, tags, links }) => (
          <ProjectCard
            key={id}
            image={image}
            title={title}
            description={description}
            tags={tags}
            links={Array.isArray(links) ? links : [links]}
          />
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center gap-4">
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
