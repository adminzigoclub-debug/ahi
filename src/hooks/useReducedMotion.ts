import { useEffect, useState } from 'react';

/**
 * Devuelve true si el usuario tiene activada la preferencia del
 * sistema "reducir movimiento". Se usa para desactivar o simplificar
 * animaciones (ej. la animación de apertura de caja de regalo).
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersReduced(event.matches);

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}
