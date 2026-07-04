type ClassValue = string | number | boolean | undefined | null;

/**
 * Combina clases condicionalmente, filtrando valores falsy.
 * Base para todos los componentes reutilizables del sistema de diseño.
 *
 * Ejemplo: cn('px-4', isActive && 'bg-brand-coral', className)
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
