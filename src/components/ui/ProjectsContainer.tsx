// Tipos
import type { Project } from "@/lib/index";
// Componentes
import BentoProjects from "./BentoProjects";
// Hooks
import { useLastUpdate } from "@/hooks/useLastUpdate";

export default function ProjectsContainer({ project }: { project: Project }) {
  const lastUpdate = useLastUpdate({ repoPath: project.repoPath });

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 mb-1 mt-12">
      <BentoProjects {...project} lastUpdate={lastUpdate || ""} />
    </div>
  );
}
