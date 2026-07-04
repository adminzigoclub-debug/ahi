import type { ReactNode } from 'react';
import { cn } from '@utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Limita el ancho máximo. 'narrow' para contenido de lectura, 'wide' para secciones visuales. */
  size?: 'narrow' | 'default' | 'wide';
}

const sizeMap = {
  narrow: 'max-w-2xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
} as const;

/**
 * Envoltorio de ancho máximo + padding horizontal responsive.
 * Centraliza el "grid" del sitio: si el ancho de marca cambia,
 * se cambia en un solo lugar.
 */
export default function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8 lg:px-12',
        sizeMap[size],
        className
      )}
    >
      {children}
    </div>
  );
}
