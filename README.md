# \# David Dostal — Webpage (dostal-page-react)

# 

# A modern, fast personal website built with \*\*Vite\*\* and \*\*React\*\*, styled with \*\*SCSS\*\* and \*\*Bootstrap\*\*.  

# It features a clean portfolio landing page, a skills/experience tab section, a zoomable \*\*Skill Map\*\* modal, and a polished header/footer with a sticky behavior and back‑to‑top control.

# 

# \## Live Demo

# 

# \*\*GitHub Pages:\*\* https://David-Dostal.github.io/dostal-webpage-main

# 

# \## Features

# 

# \- ⚡ \*\*Vite + React\*\* app structure (`src/`, single‑page app with React Router)

# \- 🎯 \*\*Portfolio landing\*\* with hero copy and CTAs

# \- 🧭 \*\*Sticky header\*\* with mobile menu and smooth page section navigation

# \- 🧩 \*\*Tabs\*\* for \*\*Main skills\*\*, \*\*Experience\*\*, \*\*Education \& Certification\*\* (`react-tabs`)

# \- 🗺️ \*\*Skill Map\*\* modal with pan/zoom (`react-zoom-pan-pinch`)

# \- 📨 \*\*Contact\*\* section scaffold (location shown; form wiring ready for EmailJS if desired)

# \- 🧱 \*\*SCSS\*\* architecture and \*\*Bootstrap 4.6\*\* utility classes

# \- 🔍 SEO helper via `react-helmet-async` (`src/component/common/Helmet.jsx`)

# \- 🧩 Ready-to-use components: `HeaderThree`, `FooterTwo`, `PageScrollTop`, `CustomTab`, `ServiceList`, `Error404`, etc.

# 

# \## Project Structure (key paths)

# 

# ```

# .

# ├── index.html

# ├── vite.config.js

# ├── package.json

# ├── src/

# │   ├── App.jsx

# │   ├── main.jsx

# │   ├── index.scss

# │   ├── assets/               # images, icons, SCSS partials

# │   ├── component/            # header, footer, sliders, skillmap, etc.

# │   ├── elements/             # contact, service, tabs, 404 page

# │   └── main/                 # page-level composites (e.g., PortfolioLanding)

# └── public/                   # static assets (if any)

# ```

# 

# \## Getting Started

# 

# > Requires \*\*Node.js 18+\*\* (Vite 5) and \*\*npm\*\*.

# 

# ```bash

# \# Install dependencies

# npm install

# 

# \# Start a local dev server

# npm run dev

# \# Open the printed URL (e.g., http://localhost:5173)

# ```

# 

# \### Production Build

# 

# ```bash

# npm run build

# \# Preview the production build locally

# npm run preview

# ```

# 

# \### Deploy to GitHub Pages

# 

# This repository is configured to publish with \*\*gh-pages\*\* (see `package.json` scripts).

# 

# ```bash

# \# Build the production site

# npm run build

# 

# \# Publish the contents of ./dist to the gh-pages branch

# npm run deploy

# ```

# 

# > \*\*Important for GitHub Pages\*\*: If this is a \*\*project\*\* site (served at `https://<user>.github.io/<repo>/`) set the Vite base path to your repo name so built asset URLs work:

# >

# > ```js

# > // vite.config.js

# > import { defineConfig } from "vite";

# > import react from "@vitejs/plugin-react-swc";

# >

# > export default defineConfig({

# >   base: "/{your-repo-name}/",

# >   plugins: \[react()],

# >   css: {

# >     preprocessorOptions: {

# >       scss: {

# >         api: "modern-compiler",

# >         silenceDeprecations: \["import", "global-builtin"],

# >       },

# >     },

# >   },

# > });

# > ```

# >

# > Replace `{your-repo-name}` with your repository name (for example: `/dostal-webpage-main/`). If you use a \*\*user\*\* site (`https://<user>.github.io/`), the `base` can stay `/`.

# 

# If the site does not load CSS/JS on GitHub Pages, double-check the `base` option in `vite.config.js` and the \*\*Pages → Source\*\* setting on GitHub.

# 

# 

# \## Scripts

# 

# Common scripts from `package.json`:

# 

# ```bash

# npm run dev       # Start dev server

# npm run build     # Build production site into ./dist

# npm run preview   # Preview ./dist locally

# npm run lint      # (If configured) run ESLint

# npm run deploy    # Publish to GitHub Pages (gh-pages)

# ```

# 

# \## Acknowledgements

# 

# \- Initial scaffolding and styles are inspired by the \*\*Trydo React\*\* template family; components and styles have been adapted for this site.

# \- Thanks to the open‑source ecosystem: `react`, `vite`, `react-tabs`, `react-helmet-async`, `react-slick`, `react-zoom-pan-pinch`, and more.

# 

# \## License

# 

# © 2025 David Dostal.



