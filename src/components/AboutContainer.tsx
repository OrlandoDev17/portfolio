import MeCard from '../components/MeCard';
import AboutContent from './AboutContent';

export default function AboutContainer() {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-8">
      <MeCard />
      <AboutContent />
    </div>
  );
}
