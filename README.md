# ahí | él regalo perfecto

> No es un ecommerce. Es el lugar donde las personas expresan los regalos
> que realmente quieren recibir, para que quienes las quieren acierten
> siempre. Vendemos emociones, no productos.

Este repositorio es la **base técnica** del proyecto: arquitectura,
sistema de diseño y configuración de despliegue. Está pensada para
crecer durante años sin reescrituras.

## Stack

React 19 · Vite · TypeScript · TailwindCSS · React Router · Framer
Motion · Lucide Icons · React Hook Form · Zod · ESLint · Prettier ·
Cloudflare Pages · Supabase (preparado, aún no activo)

## Arquitectura

```
src/
  components/   UI reutilizable y sin lógica de negocio (Button, Card, Navbar...)
  layouts/      Composición estructural de páginas (Navbar + Outlet + Footer)
  pages/        Vistas ruteadas
  hooks/        Lógica reutilizable (useReducedMotion, useIntroSeen...)
  context/      Estado global de React (vacío hoy; ver context/README.md)
  services/     Única puerta de acceso a datos (vacío hoy; ver services/README.md)
  lib/          Clientes de librerías externas (ej. Supabase)
  utils/        Funciones puras sin dependencias de React
  router/       Árbol de rutas centralizado
  types/        Tipos TypeScript compartidos
  constants/    Rutas y valores fijos
  animations/   Variantes de Framer Motion reutilizables
  styles/       Tokens de diseño (globals.css) — única fuente de verdad de color/tipografía
  config/       Configuración del sitio (nombre, dominio, descripción)
```

**Regla de oro:** un componente nunca decide de dónde vienen los
datos (eso es `services/`) ni qué color hexadecimal usar (eso son
las variables CSS en `styles/globals.css`). Esto es lo que permite
que el proyecto crezca sin romperse.

## 1. Requisitos

- Node.js 20 o superior
- npm 10 o superior
- Cuenta de GitHub
- Cuenta de Cloudflare (Pages)

## 2. Instalación local

```bash
git clone https://github.com/<tu-usuario>/ahi.git
cd ahi
npm install
cp .env.example .env
npm run dev
```

La app queda disponible en `http://localhost:5173`.

## 3. Variables de entorno

Copiar `.env.example` a `.env` (este archivo nunca se sube al
repositorio, ver `.gitignore`). Hoy solo se usan para SEO/metadata;
`VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` quedan reservadas
para cuando se conecte el backend.

## 4. Scripts disponibles

| Comando              | Qué hace                                      |
| --------------------- | ---------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con hot reload          |
| `npm run build`        | Type-check + build de producción en `dist/`    |
| `npm run preview`      | Sirve localmente el build de producción        |
| `npm run lint`         | Revisa errores de ESLint                       |
| `npm run lint:fix`     | Corrige automáticamente lo que se pueda        |
| `npm run format`       | Formatea todo el proyecto con Prettier         |
| `npm run typecheck`    | Solo chequeo de tipos, sin emitir archivos     |

## 5. Publicar en GitHub (primera vez)

```bash
git init
git add .
git commit -m "chore: scaffold inicial del proyecto ahí"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/ahi.git
git push -u origin main
```

A partir de aquí, cualquier cambio se publica con:

```bash
git add .
git commit -m "mensaje descriptivo"
git push
```

## 6. Desplegar en Cloudflare Pages

1. Entrar a **Cloudflare Dashboard → Workers & Pages → Create → Pages
   → Connect to Git** y seleccionar el repositorio `ahi`.
2. Configuración de build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. En **Environment variables** (si ya se usan), agregar las mismas
   claves que `.env.example` (ej. `VITE_SITE_URL`).
4. Guardar y desplegar. Cloudflare construye automáticamente en cada
   `git push` a `main` — no se necesita ningún paso manual adicional.

El archivo `public/_redirects` ya está incluido para que las rutas
de React Router (`/lo-que-sea`) funcionen correctamente en Cloudflare
Pages en vez de devolver 404.

## 7. Conectar el dominio ahi.com

> **Nota de arquitectura:** el dominio de marca es "ahí", pero el
> dominio técnico registrado debe ser `ahi.com` (sin tilde). Los
> nombres de dominio no soportan tildes de forma confiable entre
> navegadores/clientes de correo; usar la versión con tilde
> obligaría a punycode (`xn--ah-cja.com`), lo cual es inconsistente
> para SEO y para compartir enlaces. "ahí" queda como identidad
> verbal y visual (logo, copy), `ahi.com` como URL.

1. En el proyecto de Cloudflare Pages: **Custom domains → Set up a
   custom domain** → escribir `ahi.com`.
2. Si el dominio ya está en Cloudflare (DNS gestionado ahí),
   Cloudflare configura el registro automáticamente.
3. Si el dominio está en otro registrador, apuntar el DNS a
   Cloudflare (nameservers) o crear el registro CNAME que Cloudflare
   indique.
4. Repetir para `www.ahi.com` si se quiere soportar ambas variantes.

## 8. Supabase (cuándo y cómo activarlo)

Hoy la app **no depende de ningún backend**. Cuando se implemente:

1. `npm install @supabase/supabase-js`
2. Completar `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en `.env`
   (y en las variables de entorno de Cloudflare Pages).
3. Descomentar el cliente en `src/lib/supabaseClient.ts`.
4. Crear funciones de acceso a datos en `src/services/`. Ningún
   componente debe llamar a Supabase directamente.

## 9. Próximas etapas (fuera del alcance de hoy)

- **Etapa 1:** completar el sistema de componentes (Card, Modal,
  Toast, Loader, Skeleton, Badge, Avatar, Empty State).
- **Etapa 2:** Landing real (Hero, Cómo funciona, Beneficios,
  Historias, FAQ, CTA).
- **Etapa 3:** animación de apertura de caja de regalo (con
  `hooks/useIntroSeen.ts` y `hooks/useReducedMotion.ts` ya
  preparados para mostrarla una sola vez y respetar accesibilidad).
- **PWA real:** agregar `vite-plugin-pwa` + iconos 192/512px +
  service worker. `public/manifest.webmanifest` ya deja la base
  lista.
- **Tests:** agregar Vitest + Testing Library sobre los componentes
  del sistema de diseño.

## Licencia

Privado — todos los derechos reservados.
