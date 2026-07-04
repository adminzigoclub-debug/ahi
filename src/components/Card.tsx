import type { ReactNode } from 'react';
import { cn } from '@utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Tarjeta base del sistema de diseño: fondo blanco, borde gris claro
 * institucional, sombra suave. Usada por Beneficios, FAQ y, a futuro,
 * las tarjetas de deseos del dashboard.
 */
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-gray-light bg-white p-6 shadow-card',
        className
      )}
    >
      {children}
    </div>
  );
}
