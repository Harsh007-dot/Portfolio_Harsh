# Cyberpunk Portfolio

Next.js + Tailwind portfolio with cyberpunk neon styling.

## Install

```bash
npm install
npm run dev
```

## Deploy to Vercel

Option 1 — Connect via Vercel Dashboard (recommended):

- Push your repo to GitHub.
- On https://vercel.com, import the GitHub repository and follow prompts.
- Vercel will detect Next.js and deploy automatically.

Option 2 — CLI deploy:

```bash
npm i -g vercel
vercel login
npm run deploy
```

CI Deploy (GitHub Actions):

- Set a repository secret `VERCEL_TOKEN` (Personal Token from Vercel).
- Push to `main` or `master` to trigger the workflow in `.github/workflows/deploy-vercel.yml`.

## Notes

- Replace contact info in `components/Contact.jsx` and About text.
- Add real project links and images.
