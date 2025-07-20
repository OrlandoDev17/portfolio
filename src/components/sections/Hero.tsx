// Iconos
import { BriefcaseIcon, FileDonwIcon } from "@/components/icons/Icons";
// Componentes
import BorderButton from "@/components/ui/BorderButton";
import SocialItem from "@/components/ui/SocialItem";
// Constantes
import { SOCIAL_ITEMS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="max-w-9/12 mx-auto flex justify-between items-center h-[80vh]">
      <article className="flex flex-col gap-6">
        <span className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm hover:bg-green-500 dark:hover:bg-green-600 hover:scale-110 transition">
          <BriefcaseIcon />
          Disponible para trabajar
        </span>
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl xl:text-7xl font-extrabold font-Outfit gradient-text">
            Orlando López
          </h1>
          <h2 className="text-3xl xl:text-4xl font-bold font-Outfit mt-2">
            Desarrollador Front-End
          </h2>
          <h3 className="text-xl text-gray-700 dark:text-gray-300">
            Ingeniero en Informática en formación
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4/5">
            <strong className="text-blue-500">+3 Años</strong> de experiencia
            autodidacta creando experiencias web modernas e intuitivas
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <BorderButton href="/docs/CV.pdf">
            <FileDonwIcon />
            Descargar CV
          </BorderButton>
          <ul className="flex items-center gap-4">
            {SOCIAL_ITEMS.map(({ id, icon, url }) => (
              <SocialItem key={id} icon={icon} url={url} />
            ))}
          </ul>
        </div>
      </article>
      <picture className="">
        <img
          className="w-112 dark:hidden"
          src="/images/orlando-lopez.png"
          alt="Orlando López"
        />
        <img
          className="w-112 hidden dark:block"
          src="/images/orlando-lopez-dark.png"
          alt="Orlando López"
        />
      </picture>
    </section>
  );
}
