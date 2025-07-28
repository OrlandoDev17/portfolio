import React from "react";

interface StackSliderProps {
  icons: React.ElementType[];
  isBackend?: boolean;
  className?: string;
}

const StackSlider: React.FC<StackSliderProps> = ({ icons, isBackend, className }) => {
  return (
    <div
      className={`slider-track flex gap-10 sm:gap-10 lg:gap-12 py-2 sm:py-4 ${
        isBackend ? "animate-slider-reverse" : ""
      } ${className || ""}`}
      style={{ minWidth: "fit-content" }}
    >
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="flex items-center justify-center drop-shadow-xl"
          style={{ minWidth: "5.5rem", minHeight: "5.5rem" }} // 88px para xs, más ancho que antes
        >
          <Icon className="size-20 sm:size-20 md:size-16 lg:size-20 text-slate-100 bg-gradient-to-br from-blue-500 via-violet-700 to-violet-800 rounded-2xl p-3 sm:p-3 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 border border-white/10 dark:border-slate-700/30" />
        </div>
      ))}
    </div>
  );
};

export default StackSlider;
