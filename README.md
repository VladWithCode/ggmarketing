# SIBRA DGO

Sitio web del equipo de software SIBRA DGO. Next.js 15 (App Router) + TypeScript + Tailwind v4 + shadcn/ui + Framer Motion + Prisma/Neon + Clerk + UploadThing.

## Stack

- **Framework:** Next.js (App Router, React 19)
- **Lenguaje:** TypeScript strict
- **Estilos:** Tailwind CSS v4 (CSS-first config en `src/app/globals.css`)
- **UI:** shadcn/ui (estilo "new-york"), Lucide icons
- **Animación:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Notificaciones:** Sonner
- **DB:** PostgreSQL (Neon) vía Prisma
- **Auth admin:** Clerk
- **Uploads:** UploadThing
- **Deploy:** Vercel

## Inicio rápido

```bash
pnpm install      # o npm/bun
cp .env.example .env.local
# llena DATABASE_URL, CLERK_*, UPLOADTHING_TOKEN, etc.
pnpm db:generate
pnpm db:push      # crea tablas en Neon
pnpm db:seed      # opcional: carga proyectos demo
pnpm dev
```

Sin DB configurada el sitio público funciona con datos seed in-memory. El admin requiere DB + Clerk.

## Estructura

```
src/
  app/
    (rutas públicas: /, /servicios, /proyectos, /proyectos/[slug],
     /acerca-de-nosotros, /contacto, /aviso-de-privacidad,
     /terminos-y-condiciones, /politica-de-cookies)
    admin/                  → dashboard + CRUD proyectos + contactos (Clerk-protected)
    api/contact             → POST formulario público
    api/admin/projects      → CRUD proyectos (auth)
    api/uploadthing         → UploadThing handler
    sitemap.ts, robots.ts
  components/
    sections/               → secciones de página (hero, services, etc.)
    admin/                  → componentes del CMS
    ui/                     → primitivas shadcn
    seo/                    → JSON-LD
  lib/
    prisma.ts, utils.ts, fonts.ts, settings.ts,
    projects.ts, projects-seed.ts, plans.ts, testimonials.ts,
    project-schema.ts, plan-schema.ts, settings-schema.ts,
    contact-schema.ts, uploadthing.ts
prisma/
  schema.prisma, seed.ts
public/
  logo.png, placeholder-*.svg
middleware.ts               → Clerk auth para /admin
```

## Modelo de datos

`Project`, `Contact`, `Plan`, `Subscription`, `Settings`. Ver `prisma/schema.prisma`.

## Paquetes y checkout (Stripe)

Estructura comercial inspirada en GG Marketing, re-tematizada a SIBRA DGO:
paquetes **Básico / Profesional / Empresarial** (`src/lib/plans.ts`) con tabla
comparativa en `/servicios`.

Precios actuales = "cotización personalizada" (CTA a contacto/WhatsApp).
El checkout Stripe está como **scaffolding inactivo** (`src/app/api/checkout/route.ts`
devuelve 501). Para activarlo:

1. `npm install stripe`
2. Setear `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` en env
3. Setear `Plan.priceCents` + `Plan.stripePriceId` (admin/DB)
4. Implementar `stripe.checkout.sessions.create(...)` en `/api/checkout`
5. Implementar `/api/stripe/webhook` para persistir `Subscription`

## Variables de entorno

Ver `.env.example`. Mínimas para deploy completo:

- `DATABASE_URL`, `DIRECT_URL` (Neon)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- `UPLOADTHING_TOKEN`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`

## Scripts

- `pnpm dev` — desarrollo
- `pnpm build` — build producción
- `pnpm typecheck` — TS sin emitir
- `pnpm lint` — ESLint
- `pnpm db:push` — sincroniza schema con Neon
- `pnpm db:seed` — carga proyectos demo

## Deploy en Vercel

1. Importa el repo.
2. Configura env vars (las mismas de arriba).
3. Build command: `pnpm build` (Vercel detecta Prisma y corre `prisma generate`).
4. Region recomendada: cercana a Neon.

## TODO / pendientes reales

- Revisión legal por abogado de los textos base (`/aviso-de-privacidad`, `/terminos-y-condiciones`, `/politica-de-cookies`).
- Notificación por email nativo al recibir contacto (hoy webhook opcional via `CONTACT_WEBHOOK_URL`).
- Reemplazar placeholders `/placeholder-*.svg` con imágenes reales.
- Logos/testimonios reales de clientes.
- Página/sección de equipo con fotos.
- Blog opcional (`/blog`, `/blog/[slug]`) — no implementado en esta tanda.
- Filtros/búsqueda en `/proyectos` cuando crezca el portafolio.
- Tests (Vitest/Playwright) — no añadidos.
