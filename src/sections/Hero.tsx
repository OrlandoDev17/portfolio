import BorderButton from '../components/BorderButton';
import GradientButton from '../components/GradientButton';
import { BriefCaseIcon, DownloadIcon, MessageIcon } from '../components/Icons';
import SocialButton from '../components/SocialButton';
import { SOCIAL_MEDIAS } from '../consts/const';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-4 md:px-16 xl:px-32 2xl:px-64 py-10 pb-18 relative    top-32 lg:top-23 gap-8 xl:gap-12 2xl:gap-26 dark:bg-zinc-800 mb-24 h-[90vh] md:h-[65vh]">
      <div className="flex flex-col items-start gap-8">
        <span className="flex items-center gap-2 bg-green-200 text-green-900 px-3 py-1 rounded-full font-medium text-sm cursor-pointer hover:bg-green-400 hover:scale-110 transition dark:bg-green-700 dark:text-green-200 dark:hover:bg-green-600">
          <BriefCaseIcon />
          Disponible para trabajar
        </span>
        <article className="flex flex-col gap-4">
          <h1 className="text-6xl md:text-7xl font-black gradient-text max-w-80 md:max-w-full">
            Orlando López
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-white max-w-80 lg:max-w-full">
            Desarrollador Front-End
          </h2>
          <h3 className="text-lg md:text-xl text-gray-700 dark:text-gray-100">
            Ingeniero en Informática en formación
          </h3>
          <p className="text-lg md:text-xl text-gray-500 max-w-160 dark:text-gray-300">
            <strong className="text-blue-500">+2 Años</strong> de experiencia
            autodidacta creando experiencias web modernas e intuitivas
          </p>
        </article>
        <footer className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-6">
            <GradientButton>
              <MessageIcon />
              Contactame
            </GradientButton>
            <BorderButton>
              <DownloadIcon />
              Descargar CV
            </BorderButton>
          </div>
          <ul className="flex items-center gap-4">
            {SOCIAL_MEDIAS.map(({ id, icon, url, bgColor, hoverBgColor }) => (
              <SocialButton
                key={id}
                href={url}
                icon={icon}
                bgColor={bgColor}
                hoverBgColor={hoverBgColor}
              />
            ))}
          </ul>
        </footer>
      </div>
      <aside>
        <img
          className="size-84 lg:size-76 xl:size-84 object-cover rounded-full p-4 border-4 border-blue-500"
          src="./images/photo.png"
          alt="Fotográfia de Orlando López"
        />
      </aside>
    </section>
  );
}
