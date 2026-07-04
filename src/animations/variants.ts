import type { Variants } from 'framer-motion';

/**
 * Variantes de animación reutilizables. Mantener las curvas y
 * duraciones aquí (no hardcodeadas en cada componente) para que la
 * "sensación" de movimiento del sitio sea consistente y fácil de
 * ajustar globalmente.
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
