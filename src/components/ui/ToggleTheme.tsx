import { SunIcon, MoonIcon } from "../icons/Icons";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inicializar desde localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // Manejar cambio de tema
  const handleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <motion.button
      key={isDarkMode ? "moon" : "sun"}
      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
      transition={{ duration: 0.2 }}
      onClick={handleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <SunIcon className="size-10 p-2 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-110 transition" />
        ) : (
          <MoonIcon className="size-10 p-2 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-110 transition" />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
