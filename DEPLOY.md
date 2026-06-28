# Deploying Talha's Portfolio

The site builds to a fully static folder and works on **GitHub Pages**, **Vercel**, **Netlify**, or any static host.

## Option 1 — GitHub Pages (recommended for github.io)

A workflow is already wired up at `.github/workflows/deploy.yml`.

1. Create a new GitHub repo and push this folder to its `main` branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. The first push runs the workflow automatically. Within ~1 minute you'll see
   the site at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

The workflow auto-sets `NEXT_PUBLIC_BASE_PATH=/YOUR_REPO_NAME` so every
internal link — including the resume PDF — works correctly under the subpath.

### Deploying at the root domain instead

If you're deploying at `https://YOUR_USERNAME.github.io/` (no repo subpath),
edit `.github/workflows/deploy.yml` and remove the `NEXT_PUBLIC_BASE_PATH` env
line so it defaults to empty.

## Option 2 — Vercel

1. Push to GitHub (or any git host Vercel can read).
2. Import the repo in Vercel. No configuration needed — Vercel detects Next.js
   automatically and the site deploys to a `*.vercel.app` URL.
3. Leave `NEXT_PUBLIC_BASE_PATH` unset.

## Option 3 — Local build / drop into any static host

```bash
npm install
npm run build
```

The static site lands in `out/`. Upload that folder anywhere (S3, Cloudflare
Pages, the build server, USB stick).

If the destination serves the site under a subpath, build with:

```bash
NEXT_PUBLIC_BASE_PATH=/your-subpath npm run build
```

## Resume

The resume PDF is at `public/talha-tariq-resume.pdf`. It's bundled into every
build and the "View My Resume" buttons across the site resolve to the correct
URL whether you deploy at the root or under a subpath — the `RESUME_HREF`
helper in `lib/asset.ts` prefixes it automatically.

Swap in an updated PDF anytime — keep the same filename so links keep working,
or update `public/` + the filename in `lib/asset.ts` together.
