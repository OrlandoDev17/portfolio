import type { Skill } from "../consts/types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function SkillItem({ icon: Icon, title, text, color }: Skill) {
  const [containerRef, isAnimated] = useIntersectionObserver<HTMLLIElement>();

  const getAnimationClasses = (animationClass: string | undefined) => {
    return `initial-hidden ${isAnimated ? animationClass : ""}`;
  };

  return (
    <li
      ref={containerRef}
      className={`flex flex-col gap-2 dark:bg-slate-700 p-4 rounded-xl shadow-gray-800 dark:shadow-gray-600 hover:shadow-lg transition ${getAnimationClasses(
        "slide-in-left"
      )}`}
    >
      <div className="flex items-center gap-2 dark:text-white">
        <Icon className={`size-7 ${color}`} />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
    </li>
  );
}
