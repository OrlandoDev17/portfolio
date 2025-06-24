import type { StackCardProps } from '../consts/types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function StackCard({
  icon: Icon,
  title,
  tags,
  textColor,
  bgColor,
  borderColor,
  itemBgColor,
  shadowColor,
  hoverColor,
  darkTextColor,
  darkBgColor,
  darkItemBgColor,
  animation,
}: StackCardProps) {
  const [cardRef, isAnimated] = useIntersectionObserver();

  const getAnimationClasses = (animationClass: string | undefined) => {
    return `initial-hidden ${isAnimated ? animationClass : ''}`;  };
  return (
    <article
      ref={cardRef}
      className={`${getAnimationClasses(animation)} flex flex-col gap-6 border-4 ${borderColor} p-6 rounded-2xl hover:scale-102 transition dark:bg-slate-900 shadow-lg ${shadowColor} hover:shadow-xl`}
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
