import type { Variants } from "motion";

// Container
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
};

// 🔽 Fade In Up
export const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// 🔄 Fade In Left
export const fadeInLeft = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: {
    type: "tween" as const,
    ease: "linear" as const,
    duration: 0.5,
  },
};

// ⏫ Fade In Right
export const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// 🔍 Fade In + Scale
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

// Fade In bottom left
export const fadeInBottomLeft = {
  initial: { opacity: 0, y: 50, x: -100 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Fade In bottom right
export const fadeInBottomRight = {
  initial: { opacity: 0, y: 50, x: 100 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Fade In top left
export const fadeInTopLeft = {
  initial: { opacity: 0, y: 50, x: 50 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.3 },
};

// Fade In top right
export const fadeInTopRight = {
  initial: { opacity: 0, y: -50, x: 100 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.3 },
};
