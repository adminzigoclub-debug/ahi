import type { Config } from 'tailwindcss';

/**
 * Sistema de diseño de "ahí" — paleta oficial de marca.
 *
 * IMPORTANTE: no agregar colores fuera de esta paleta. Cualquier
 * necesidad visual nueva (hover, disabled, overlay...) debe resolverse
 * con opacidad/mezcla de estos 9 colores, nunca con un hex nuevo.
 * Todo se referencia vía variables CSS (src/styles/globals.css) para
 * poder ajustar la paleta a futuro desde un solo lugar.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: 'var(--color-navy)', // #1E2B50 — fondo principal, header, footer
        orange: 'var(--color-orange)', // #FF7B16 — botones y CTA
        white: 'var(--color-white)', // #FFFFFF
        gray: {
          institutional: 'var(--color-gray-institutional)', // #A9A9A9 — subtítulos
          light: 'var(--color-gray-light)', // #EAEAEA — bordes, divisores, tarjetas
        },
        success: 'var(--color-success)', // #2E8B57
        wine: 'var(--color-wine)', // #8B1E3F — alertas, favoritos
        link: 'var(--color-link)', // #3F66D7 — enlaces, seleccionados
        black: 'var(--color-black)', // #111111 — sombras, texto de alto contraste
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        extralight: '200',
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        card: '1.25rem',
        control: '0.75rem',
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(17, 17, 17, 0.35)',
        card: '0 8px 30px -10px rgba(17, 17, 17, 0.12)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
