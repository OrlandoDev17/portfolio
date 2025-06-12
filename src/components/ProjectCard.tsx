import BorderButton from './BorderButton';
import GradientButton from './GradientButton';
import { CodeIcon, RocketIcon } from './Icons';

interface Tag {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

interface ProjectLinks {
  demo: string;
  code: string;
}

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  links: ProjectLinks[];
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  links,
}: ProjectProps) {
  return (
    <li>
      <article className="flex flex-col gap-6 rounded-xl shadow-gray-800 shadow-lg max-w-md hover:shadow-xl transition dark:shadow-gray-600">
        <picture>
          <img
            className="rounded-t-xl border-b-2 border-slate-700"
            src={image}
            alt={`Imagen del proyecto ${title}`}
          />
        </picture>
        <div className="flex flex-col gap-4 px-6 py-2">
          <div>
            <h2 className="text-xl md:text-4xl font-semibold tracking-wide mb-1 dark:text-white">
              {title}
            </h2>
            <p className="text-pretty text-gray-600 text-sm dark:text-gray-200 mb-1">
              {description}
            </p>
          </div>
          <span className="text-lg font-medium dark:text-white">
            Tecnologías Usadas:
          </span>
          <ul className="flex items-center gap-1 flex-wrap justify-start">
            {tags.map(({ icon: Icon, name }) => (
              <li
                key={name}
                className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-full font-medium text-sm dark:bg-gray-700 dark:text-white"
              >
                <Icon className="size-6" />
                {name}
              </li>
            ))}
          </ul>
          <aside className="flex flex-col lg:flex-row justify-between items-center py-4 w-full">
            {links.map(({ demo, code }) => (
              <>
                <GradientButton
                  className="w-full lg:w-48 justify-center"
                  href={demo}
                >
                  <RocketIcon />
                  Ver Demo
                </GradientButton>
                <BorderButton
                  className="w-full lg:w-48 justify-center"
                  href={code}
                >
                  <CodeIcon />
                  Ver Código
                </BorderButton>
              </>
            ))}
          </aside>
        </div>
      </article>
    </li>
  );
}
