# Port of LA Animal ER — port.vet

Website for Port of LA Animal Emergency Room (Wilmington, CA). Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Local development

Requires Node.js (18+) and npm.

```sh
git clone <THIS_REPO_URL>
cd port-vet-launchpad-main
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Build

```sh
npm run build
```

Outputs a static site to `dist/`.

## Deployment

Deployed via [Vercel](https://vercel.com), auto-deploying from the `main` branch of this repo. `vercel.json` handles SPA route fallback for React Router.

## Backend

Form submissions and other dynamic data are handled via [Supabase](https://supabase.com) (see `src/integrations/supabase/` and `supabase/functions/`).
