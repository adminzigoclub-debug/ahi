/**
 * Rutas centralizadas de la aplicación.
 *
 * Nunca escribir strings de rutas "a mano" dentro de un componente
 * (ej. <Link to="/">). Siempre importar desde aquí. Esto permite
 * renombrar o anidar rutas sin salir a buscar cada referencia.
 */
export const ROUTES = {
  home: '/',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
