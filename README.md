# Shashidhara S – Portfolio

Angular 22 + Tailwind CSS v4. Standalone OnPush components, signals, no per-component CSS files.
Live: https://shashidhar74.github.io/portfolio/

## Run locally
```bash
npm install
npm start          # http://localhost:4200
```

## Edit content
Almost everything is in **`src/app/data/portfolio.data.ts`** — text, links, projects, skills, awards, resumes.

| To change… | Edit |
|---|---|
| Availability badge in the hero | `AVAILABILITY` (`show: false` hides it) |
| Profile photo | replace `public/images/profile-400.webp`, `profile-800.webp`, `profile-800.jpg` |
| Resumes | replace the PDFs in `public/resume/` (keep the names) or change `RESUMES[].file`; `file: null` shows a "coming soon" placeholder |
| WordNest screenshot | add `public/images/wordnest.webp` and set `WORDNEST.screenshot = 'images/wordnest.webp'` |
| WordNest GitHub button | set `WORDNEST.repoPublic = true` once the repo is public |
| Contact form | `CONTACT.formMode` — `'mailto'` opens a pre-filled email; `'none'` hides the form |
| Social preview image | `public/images/og-image.png` (1200×630) |

Paths in the data file have no leading slash so they resolve against `<base href>` (`/portfolio/` on GitHub Pages).

## Structure
- `src/app/sections/*` – one component per section (header, hero, about, experience, projects, wordnest, skills, achievements, resume, contact, footer)
- `src/app/shared/*` – `Icon`, `TechBadge`, `SectionHeading`, `Reveal` (scroll-in animation)
- `src/app/core/*` – `ThemeService` (light/dark), `ScrollSpyService` (active nav + smooth scroll)
- `src/styles.css` – design tokens for both themes and shared utility classes (`card`, `btn`, `chip`, …)
- `public/icons/*.svg` – technology logos from Simple Icons (CC0), tinted to the theme colour

## Deploy
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with
`--base-href /<repo-name>/` and publishes `dist/portfolio/browser` to GitHub Pages.

> Building locally in Git Bash on Windows? Use `MSYS_NO_PATHCONV=1 npx ng build --base-href /portfolio/`,
> otherwise Git Bash rewrites `/portfolio/` into a Windows path.
