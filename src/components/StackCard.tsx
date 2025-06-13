import type { ComponentType } from 'react';

type Tag = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
};

interface StackCardProps {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  tags: Tag[];
  textColor: string;
  bgColor: string;
  borderColor: string;
  itemBgColor: string;
  shadowColor: string;
  hoverColor: string;
  darkTextColor: string;
  darkBgColor: string;
  darkItemBgColor: string;
}

export default function StackCard({
  icon: Icon,
  title,
  tags,
  bgColor,
  textColor,
  itemBgColor,
  borderColor,
  shadowColor,
  hoverColor,
  darkBgColor,
  darkTextColor,
  darkItemBgColor,
}: StackCardProps) {
  return (
    <article
      className={`flex flex-col gap-6 border-4 ${borderColor} p-6 rounded-2xl hover:scale-102 transition dark:bg-slate-900 shadow-lg ${shadowColor} hover:shadow-xl`}
    >
      <div className="flex items-center gap-4">
        <Icon
          className={`${bgColor} ${darkBgColor} size-12 p-2 rounded-xl ${textColor} ${darkTextColor}`}
        />
        <h3 className={`${textColor} text-2xl font-semibold`}>{title}</h3>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-y-6 gap-x-2">
        {tags.map(({ icon: Icon, name }) => (
          <li
            key={name}
            className={`flex flex-col justify-center items-center gap-2 ${itemBgColor} ${darkItemBgColor} w-38 h-32 p-2 text-center rounded-xl ${hoverColor} transition`}
          >
            <Icon
              className={`size-13 ${textColor} ${darkTextColor} ${bgColor} ${darkBgColor} p-2 rounded-xl`}
            />
            <h4 className={`font-medium cursor-default dark:text-white`}>
              {name}
            </h4>
          </li>
        ))}
      </ul>
    </article>
  );
}
