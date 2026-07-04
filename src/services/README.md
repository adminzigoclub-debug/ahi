# services/

Esta carpeta es la única puerta de entrada/salida de datos de la app.

**Regla:** ningún componente o página llama directamente a Supabase,
`fetch`, o cualquier API externa. Siempre a través de una función
exportada desde aquí, por ejemplo:

```ts
// src/services/gifts.service.ts (ejemplo futuro)
export async function getGiftById(id: string) {
  // lógica de acceso a datos
}
```

**Por qué:** cuando conectemos Supabase (o cambiemos de proveedor en
el futuro), solo se modifica esta capa. Componentes y páginas nunca
se enteran de dónde vienen los datos.

Hoy está vacía a propósito: se llena a partir de la Etapa en que se
active Supabase (ver `src/lib/supabaseClient.ts`).
