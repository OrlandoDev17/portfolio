import { SKILLS } from '../consts/const';
import GradientButton from './GradientButton';
import { DownloadIcon } from './Icons';
import SkillItem from './SkillItem';

export default function AboutContent() {
  return (
    <article className="flex flex-col gap-6 shadow-lg bg-white shadow-gray-800 max-w-180 rounded-xl p-6 dark:shadow-gray-600 dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col gap-4">
        <p className="text-gray-800 dark:text-gray-300">
          Soy un desarrollador front-end apasionado por crear experiencias
          digitales excepcionales. Actualmente estoy cursando Ingeniería en
          Informática, he dedicado más de 2 años al aprendizaje autodidacta de
          tecnologías web modernas.
        </p>
        <p className="text-gray-800 dark:text-gray-300">
          Mi enfoque se centra en crear soluciones, escribir código limpio,
          crear interfaces intuitivas y mantenerme actualizado con las últimas
          tendencias del desarrollo web. Disfruto transformando ideas complejas
          en soluciones simples y elegantes.
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-6">
        {SKILLS.map(({ icon, title, text, color }) => (
          <SkillItem icon={icon} title={title} text={text} color={color} />
        ))}
      </ul>
      <div className="flex justify-center">
        <GradientButton className="justify-center">
          <DownloadIcon />
          Descargar Curriculum
        </GradientButton>
      </div>
    </article>
  );
}
