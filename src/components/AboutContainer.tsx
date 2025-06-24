import MeCard from "../components/MeCard";
import AboutContent from "./AboutContent";

export default function AboutContainer() {
  return (
    <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-start xl:items-start gap-8">
      <MeCard />
      <AboutContent />
    </div>
  );
}
