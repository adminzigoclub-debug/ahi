/**
 * Tipos globales compartidos entre módulos. Tipos específicos de un
 * dominio (ej. un futuro "Gift") deberían vivir en su propio archivo
 * (ej. `gift.types.ts`) cuando ese dominio se implemente.
 */

export interface SEOMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
