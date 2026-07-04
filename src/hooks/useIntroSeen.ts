const INTRO_STORAGE_KEY = 'ahi:intro-seen';

/**
 * Controla si el visitante ya vio la animación de apertura de caja
 * completa. Se usa en la Etapa 3 (Animación) para mostrar la versión
 * larga (6-8s) solo la primera vez, y una versión corta después.
 *
 * Nota: usa localStorage real del navegador (esto es la app en
 * producción, no un artifact de preview).
 */
export function hasSeenIntro(): boolean {
  try {
    return window.localStorage.getItem(INTRO_STORAGE_KEY) === 'true';
  } catch {
    // Modo privado / storage bloqueado: tratamos como "no visto".
    return false;
  }
}

export function markIntroAsSeen(): void {
  try {
    window.localStorage.setItem(INTRO_STORAGE_KEY, 'true');
  } catch {
    // Si no se puede persistir, la intro simplemente se repetirá.
  }
}
