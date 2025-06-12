import SectionContainer from '../components/SectionContainer';
import { BriefCaseIcon } from '../components/Icons';
import { PROJECTS } from '../consts/const';
import ProjectCard from '../components/ProjectCard';

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
    </SectionContainer>
  );
}
