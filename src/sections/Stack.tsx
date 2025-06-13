import { CodeIcon } from '../components/Icons';
import SectionContainer from '../components/SectionContainer';
import StackGrid from '../components/StackGrid';

export default function Stack() {
  return (
    <SectionContainer
      id="stack"
      icon={CodeIcon}
      title="Stack Tecnológico"
      paragraph="Herramientas y tecnologías que domino para crear soluciones web modernas y eficientes"
    >
      <StackGrid />
    </SectionContainer>
  );
}
