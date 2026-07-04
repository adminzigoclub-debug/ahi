/**
 * Copy oficial de marca. Centralizado para que un cambio de tono o
 * de wording no obligue a buscar strings dentro de componentes.
 *
 * "él regalo perfecto" es el eslogan oficial confirmado por el
 * cliente, tal cual, con tilde. No modificar sin autorización.
 */
export const BRAND_COPY = {
  name: 'ahí',
  /** Solo para mostrar en pantalla (logo, copy). La URL real es ahi.com, sin tilde — ver README §7. */
  domain: 'ahí.com',
  tagline: 'él regalo perfecto',
  heroQuestion: '¿No sabes qué regalarle?',
  heroAnswer: 'ahí descubre lo que desea recibir.',
  heroSupporting:
    'Crea tu lista de deseos, compártela con quienes te quieren, y no vuelvas a adivinar un regalo.',
} as const;
