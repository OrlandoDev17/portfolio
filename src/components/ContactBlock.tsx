import BorderButton from './BorderButton';
import GradientButton from './GradientButton';
import { LinkedInIcon, MailIcon, MessageIcon } from './Icons';

export default function ContactBlock() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-violet-600 to-violet-700 rounded-xl p-2 shadow-lg shadow-gray-800 dark:shadow-gray-600 hover:shadow-xl">
      <article className="flex flex-col items-center justify-center  bg-white dark:bg-slate-900 p-6 rounded-xl">
        <div className="flex flex-col justify-center items-center gap-6 m-8">
          <h2 className="text-2xl dark:text-white font-semibold">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-130 text-center">
            Estoy disponible para nuevos proyectos y colaboraciones. Contáctame
            y conversemos sobre tu idea.
          </p>
          <div className="flex items-center gap-3 border-2 border-green-500 bg-green-100 px-4 py-3 rounded-full dark:bg-green-600 dark:text-white dark:border-green-200">
            <span className="flex justify-center items-center size-4 bg-green-500 dark:bg-green-200 rounded-full animate-pulse"></span>
            <h4 className="font-medium">Disponible para nuevos proyectos</h4>
          </div>
          <GradientButton>
            <MessageIcon />
            Enviar Mensaje por Whatsapp
          </GradientButton>
          <span className="text-gray-500 dark:text-gray-400">
            Tiempo de respuesta promedio: 2-4 Horas
          </span>
        </div>
        <hr className="w-220 text-gray-400 mb-8" />
        <footer className="flex flex-col gap-6 pb-8">
          <span className="text-gray-600 dark:text-gray-300">
            ¿Prefieres otro medio de contacto?
          </span>
          <div className="flex justify-center items-center gap-4">
            <BorderButton href="mailto:orlandodev1707@gmail.com">
              <MailIcon />
              Email
            </BorderButton>
            <BorderButton
              className="border-violet-500 text-violet-500 hover:bg-violet-500"
              href="https://www.linkedin.com/in/orlando-lópez1707"
            >
              <LinkedInIcon className="size-8" />
              LinkedIn
            </BorderButton>
          </div>
        </footer>
      </article>
    </div>
  );
}
