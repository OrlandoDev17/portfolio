// Constantes
import { INFO_LIST } from "@/lib/constants";
import AnimatedCounter from "./AnimatedCounter";

export default function InfoList() {
  return (
    <ul className="flex gap-6">
      {INFO_LIST.map(
        ({ id, counter, title, textColor, bgColor, borderColor }) => (
          <li
            className={`flex flex-col items-center justify-center text-center py-6 px-4 rounded-xl ${bgColor} border-1 ${borderColor}`}
            key={id}
          >
            <AnimatedCounter target={counter} textColor={textColor} />
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {title}
            </span>
          </li>
        )
      )}
    </ul>
  );
}
