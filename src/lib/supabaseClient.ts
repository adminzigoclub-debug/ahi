/**
 * Cliente de Supabase — PREPARADO, NO ACTIVO todavía.
 *
 * No se instancia en el arranque de la app para no forzar variables
 * de entorno que aún no existen. Cuando se conecte el backend:
 *
 *   1. `npm install @supabase/supabase-js`
 *   2. Completar VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env
 *   3. Descomentar el bloque de abajo.
 *
 * Ningún componente debe importar Supabase directamente: siempre a
 * través de `src/services/*`, para poder cambiar de proveedor de
 * backend en el futuro sin tocar la UI.
 */

// import { createClient } from '@supabase/supabase-js';
//
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
//
// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error('Faltan variables de entorno de Supabase. Revisa .env');
// }
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export {};
