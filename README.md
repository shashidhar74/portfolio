# Shashidhara S – Portfolio

Angular 22 + Tailwind CSS v4. Standalone components, signals, no CSS files per component.

## Run locally
```bash
npm install
npm start          # http://localhost:4200
```

## Where things live
- `src/app/data/portfolio.data.ts` – all text, links, stats, projects, skills. Edit this to update the site.
- `src/app/sections/*` – one component per section (header, hero, experience, wordnest, projects, skills, contact, footer)
- `src/app/core/theme.service.ts` – dark/light toggle (signal + localStorage)
- `src/styles.css` – theme colours, Tailwind theme tokens and the few effects Tailwind can't do
- `public/resume.pdf` – replace with your latest resume (keep the same file name)

## Deploy on Vercel
1. Push this folder to a public GitHub repo named `portfolio`.
2. vercel.com → Add New Project → import the repo → Deploy (Angular is detected automatically).
3. Every `git push` to `main` redeploys.
