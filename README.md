<div align="center">

# David Dostal — Personal Webpage

Modern, fast portfolio website built with **Vite** + **React**, styled with **SCSS** and **Bootstrap**.

[![Build with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://react.dev/)
[![SCSS](https://img.shields.io/badge/Style-SCSS-CC6699)](https://sass-lang.com/)
[![Deploy-GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222)](https://pages.github.com/)

</div>

## Demo

Project page (GitHub Pages):
- **https://David-Dostal.github.io/dostal-david-webpage/**

> If you use a different repository name or a custom domain, update the URL above accordingly.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Acknowledgements](#acknowledgements)
- [License](#license)

---

## Features

- ⚡ **Vite + React** single‑page app
- 🧭 **Sticky header**, smooth in‑page navigation, mobile menu
- 🧩 **Tabbed** sections for **Main skills**, **Experience**, **Education & Certification** (`react-tabs`)
- 🗺️ **Skill Map** modal with pan/zoom (`react-zoom-pan-pinch`)
- 📨 **Contact** section scaffold (location, social links; form can be wired to EmailJS or a backend)
- 🧱 **SCSS** architecture with **Bootstrap 4.6** utilities
- 🔍 SEO helper using `react-helmet-async`
- ♻️ Reusable components: Header, Footer, Page scroll top, Custom tabs, Service list, 404, and more

## Screenshots

> Replace the image(s) below with your own screenshots.
>
> ```html
> <img src="src/assets/images/preview/landing.png" alt="Portfolio landing preview" width="800" />
> ```

---

## Project Structure

```
.
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.scss
│   ├── assets/               # images, icons, SCSS partials
│   ├── component/            # header, footer, sliders, skillmap, etc.
│   ├── elements/             # contact, service, tabs, 404 page
│   └── main/                 # page-level composites (e.g., PortfolioLanding)
└── public/                   # static assets (if any)
```

---

## Getting Started

> Requires **Node.js 18+** and **npm**.

```bash
# Install dependencies
npm install

# Start local development
npm run dev
# Open the printed URL (for example http://localhost:5173)
```

### Production Build

```bash
npm run build
# Preview the production build locally
npm run preview
```

---

## Configuration

### Vite base path for GitHub Pages

If this is a **project** site (served at `https://<user>.github.io/<repo>/`), set `base` to your repository name so asset URLs resolve correctly.

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/dostal-david-webpage/", // ← update if your repo name changes
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["import", "global-builtin"],
      },
    },
  },
});
```

If you use a **user** site (`https://<user>.github.io/`), `base` can remain `/`.

---

## Deployment

You can deploy via **gh-pages** branch or via **docs/** on `main`. Choose one method.

### Option A — `gh-pages` branch (recommended)

1. Add scripts (if not present):
   ```jsonc
   // package.json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "devDependencies": {
       "gh-pages": "^6"
     }
   }
   ```
2. Publish:
   ```bash
   npm run build
   npm run deploy
   ```

### Option B — `docs/` folder on `main`

```bash
npm run build
rm -rf docs
cp -r dist docs
git add docs && git commit -m "Update docs build"
git push
```

Then set **Settings → Pages** to *main* / */docs*.

> If CSS or JS does not load on GitHub Pages, verify the `base` option in `vite.config.js` and confirm the **Pages → Source** settings.

---

## Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build production site into ./dist
npm run preview   # Preview ./dist locally
npm run lint      # If configured: run ESLint
npm run deploy    # Publish to GitHub Pages (gh-pages)
```

---

## Tech Stack

- **React 18** + **Vite 5**
- **SCSS** with **Bootstrap 4.6** helpers
- **react-helmet-async**, **react-tabs**, **react-slick**, **react-zoom-pan-pinch**

---

## Acknowledgements

- Template inspiration from **Trydo React** themes. Components and styles have been adapted to fit this site.
- Thanks to the open‑source ecosystem.

---

## License

© 2025 David Dostal. All rights reserved.
