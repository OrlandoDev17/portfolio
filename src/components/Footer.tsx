import ContactBlock from './ContactBlock';
import { MailIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-8 md:px-16 xl:px-32 2xl:px-64 py-14 gap-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="flex items-center gap-2 text-4xl font-semibold dark:text-white">
          <MailIcon className="text-violet-500 size-12" />
          Contacto
        </h2>
        <p className="max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300">
          ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
        </p>
      </div>
      <ContactBlock />
    </footer>
  );
}
