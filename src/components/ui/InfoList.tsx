// Constantes
import { INFO_LIST } from "@/lib/constants";

export default function InfoList() {
  return (
    <ul className="flex gap-6">
      {INFO_LIST.map(
        ({ id, counter, title, textColor, bgColor, borderColor }) => (
          <li
            className={`flex flex-col items-center justify-center text-center py-6 px-4 rounded-xl ${bgColor} border-1 ${borderColor}`}
            key={id}
          >
            <span className={`text-4xl font-Outfit font-semibold ${textColor}`}>
              +{counter}
            </span>
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {title}
            </span>
          </li>
        )
      )}
    </ul>
  );
}
