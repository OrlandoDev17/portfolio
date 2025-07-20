//Tipos
import type { ContactCard } from "@/lib/index";
// Componentes
import GradientButton from "./GradientButton";
//Iconos
import { SendIcon } from "../icons/Icons";

export default function ContactCard({
  icon: Icon,
  title,
  value,
  button,
}: ContactCard) {
  return (
    <article
      className="flex flex-col items-center justify-center gap-4 bg-slate-200 dark:bg-slate-800 py-8 px-6 rounded-xl 
    border-1 border-slate-200 dark:border-slate-400/40 shadow-md shadow-slate-400 dark:shadow-slate-700"
    >
      <Icon className="size-16 p-3 bg-gradient-to-br from-blue-500 to-violet-700 rounded-full text-white" />
      <div className="flex flex-col gap-4 justify-center items-center mt-2">
        <h4 className="text-xl font-semibold font-Outfit">{title}</h4>
        <span className="text-lg text-gray-800 dark:text-gray-300">
          {value}
        </span>
        <GradientButton href={button.href}>
          <SendIcon /> {button.label}
        </GradientButton>
      </div>
    </article>
  );
}
