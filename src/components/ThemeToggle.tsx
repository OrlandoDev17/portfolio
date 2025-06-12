import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Cambiar tema al hacer clic
  const handleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      className={`p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition ${
        isDarkMode && 'hover:bg-gray-900'
      }`}
      onClick={handleTheme}
    >
      {isDarkMode ? (
        <SunIcon className="size-8 text-white" />
      ) : (
        <MoonIcon className="size-8" />
      )}
    </button>
  );
}
