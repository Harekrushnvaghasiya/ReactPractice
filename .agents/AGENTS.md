# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

All source lives under `Frontend/`. The repository root only contains this file, `.vscode/`, and the `Frontend/` directory — always `cd Frontend` (or use `Frontend/`-relative paths) before running npm scripts.

## Commands

Run from `Frontend/`:

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint` — ESLint

No test runner is configured.

## Tech stack

React 19 + TypeScript + Vite 8, `react-router-dom` v7 for routing, `styled-components` v6 for styling, `axios` present but currently unused. ESLint flat config (`eslint.config.js`) only targets `.js/.jsx` — TypeScript files are compiled by Vite but not linted; `tsc --noEmit` is not wired into any script.

## Architecture

### Entry and layout shell

`src/main.tsx` mounts the app inside `<BrowserRouter>` with a fixed layout: `<NavbarWrapper /> <App /> <Footer />`. `App.tsx` is currently a single-page composition of section components (`Hero`, `Service`, `LogoSection`, `CTA`) — there are no `<Routes>` defined yet, so navigation currently just changes the URL.

`NavbarWrapper` wraps `Navbar` in `NavbarVisibility`, which reads `useLocation()` and hides the navbar entirely when the current path matches `hiddenRoutes` (e.g. `/login`, `/checkout`). This is the pattern to follow for any layout element that shouldn't render on certain routes.

### Component convention

Every component is a directory under `src/components/<name>/` with:

- `index.tsx` — the component
- `style.tsx` — its styled-components

Sub-variants (e.g. `navbar/responsiveNavbar/`) nest the same way. When adding a component, follow this split — do not inline styles into the component file.

### Design tokens

`src/index.css` defines the entire design system as CSS custom properties on `:root`: brand colors, backgrounds, text/border colors, gradients, box-shadows, a `--spacing-N` scale, font families (`--font-family-primary|secondary|tertiary`), font weights, and a full font-size + line-height scale with `@media (max-width: 991px)` and `@media (max-width: 449px)` overrides for responsiveness. Styled-components should reference these variables (`var(--spacing-20)`, `var(--text-primary)`) rather than hardcoding values, so the responsive breakpoints apply automatically.

`src/components/styles/typography.tsx` exports a `Typography` object of reusable `css`` `` snippets (`heading_1`…`heading_6`, `body_1`…`body_4`, `tag`, `card_small/large`, `text_small/medium/large`). Compose these inside styled-components with `${Typography.heading_2}` instead of restating font rules.

`src/components/styles/commonStyle.tsx` exports `Container` — the shared `max-width: 1440px` + responsive horizontal padding wrapper. Use it around section content.

### Shared enums

`src/components/global/constants.ts` holds string-literal maps: `BUTTON_VARIANTS`, `BUTTON_SIZE`, `SPACING_TYPE`, `TONE`, `HERO_VARIANT`, `HERO_SIZE`. Component props type variant fields as `(typeof CONST)[keyof typeof CONST]` (see `src/utils/appType.tsx`). Add new variants here rather than as inline string unions.

### Types

All shared prop interfaces (`BtnProps`, `NavbarProps`, `FooterProps`, `HeroProps`, `ServiceProps`, `LogoProps`, etc.) live in `src/utils/appType.tsx`. New components consumed elsewhere should export their prop interface here for consistency.

### Assets

- `src/assets/images/index.tsx` re-exports every image as a single `Images` object. Add new image imports there and reference via `Images.<name>` — do not `import` raw files from component code.
- `src/assets/Icons/SVGIcon.tsx` is a switch-based inline SVG registry. Add new icons by extending the `getPath` switch with a new `case "<name>"`, then render `<SVGIcon name="<name>" width="…" height="…" fill="…" />`. This is the sole icon strategy — do not add `<img>` tags for SVGs that need color/fill control.

### Static content

`src/components/helpers/raw.tsx` centralizes the marketing site's static data: nav items, footer link groups, social links, app-store links, service cards, press logos. Pull from here rather than duplicating strings inline. Data references `Images.*` so any new asset must be registered in the images index first.

### Styled-components transient props

Component styles use styled-components v6 transient props (`$size`, `$variant`, `$maxTitleWidth`, `$featured`, …) so they don't leak to the DOM. Keep the `$` prefix when adding new style-only props.

### Slider pattern

`serviceSection/index.tsx` implements a horizontal card slider using a `ref` + `scrollBy` + a scroll listener that toggles `isAtStart`/`isAtEnd` to disable the arrow buttons. Reuse this pattern for other card carousels rather than pulling in a slider library.

## PR template

`Frontend/src/docs/pull_request_template` documents the expected PR sections: **What this does**, **Implementation**, **Testing** (with screenshots/recordings). Follow this structure when opening PRs.
