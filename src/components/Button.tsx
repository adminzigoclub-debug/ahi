import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-orange text-white hover:brightness-110 shadow-premium',
  secondary:
    'bg-transparent text-white border border-white/40 hover:bg-white/10',
  ghost: 'bg-transparent text-navy hover:bg-gray-light',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
};

/**
 * Botón base del sistema de diseño. Todo botón del producto pasa por
 * aquí para que un ajuste de marca sea un cambio en un solo archivo.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-control font-sans font-semibold transition-all duration-300 ease-premium',
        'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
