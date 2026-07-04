/**
 * Configuración central del sitio. Un solo lugar para nombre,
 * dominio y descripción, referenciado por SEO, Open Graph y manifest.
 */
export const siteConfig = {
  name: 'ahí',
  tagline: 'él regalo perfecto',
  description:
    '¿No sabes qué regalarle? En ahí descubre lo que realmente desea recibir.',
  url: import.meta.env.VITE_SITE_URL ?? 'https://ahi.com',
} as const;
