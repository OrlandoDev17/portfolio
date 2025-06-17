import SectionContainer from '../components/SectionContainer';
import AboutContainer from '../components/AboutContainer';
import { UserIcon } from '../components/Icons';

export default function About() {
  return (
    <SectionContainer
      className="dark:bg-slate-900"
      id="about"
      title="Sobre Mí"
      icon={UserIcon}
      paragraph="Conoce más sobre mi trayectoria, pasiones y enfoque personal"
    >
      <AboutContainer />
    </SectionContainer>
  );
}
