// Hooks
import { useState, useId } from "react";
// Iconos
import { MenuIcon, CloseIcon } from "../icons/Icons";
// Constantes
import { NAV_ITEMS } from "@/lib/constants";
// Motion
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
// Variantes
import { containerVariants } from "@/lib/motionVariants";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const handleIsOpen = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      {/* Boton para abrir y cerrar el menu */}
      <label htmlFor={menuId} className="mr-3 inline md:hidden">
        <input type="checkbox" id={menuId} hidden />
        <AnimatePresence>
          <motion.button
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ duration: 0.2 }}
            onClick={handleIsOpen}
          >
            {isOpen ? (
              <CloseIcon className="size-10 p-2 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-110 transition" />
            ) : (
              <MenuIcon className="size-10 p-2 rounded-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-110 transition" />
            )}
          </motion.button>
        </AnimatePresence>
      </label>
      {/* Menu */}
      {isOpen && (
        <motion.nav
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-18 left-0 w-full h-screen bg-slate-200 dark:bg-slate-900 z-50"
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 items-start m-12 pr-2"
          >
            {NAV_ITEMS.map(({ id, href, label }) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={id}
                className="w-full"
              >
                <a
                  className="bg-sky-500/20 dark:bg-sky-500/20 p-4 rounded-xl flex w-full"
                  href={href}
                >
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </>
  );
}
