# Portfolio Website

A premium personal portfolio starter built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React, and React Router.

## Key Architecture

- `src/components/`
  - `ui/` reusable UI primitives and theme controls
  - `common/` shared layout components
  - `theme/` accent color and theme provider logic
- `src/layouts/` base page layout wrapper
- `src/pages/` route page components
- `src/hooks/` custom hooks for theme and accent utilities
- `src/providers/` global providers and app-level context
- `src/data/` static data and design tokens
- `src/lib/` shared utilities such as `cn` helper
- `src/styles/` global Tailwind theme definitions and CSS variables
- `src/assets/` static content and image assets
- `src/sections/` future page sections and content blocks

## Features

- Dark/light/system theme switching via `next-themes`
- CSS variable-driven design system for dynamic accent palettes
- LocalStorage persistence for accent color and theme selection
- Responsive modern UI with smooth motion using `framer-motion`
- `clsx`, `tailwind-merge`, and `class-variance-authority` for robust Tailwind class composition
- `react-router-dom` for route-based page structure
- Premium minimal aesthetic with future-ready theming

## Commands

- `npm install` — install dependencies
- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run typecheck` — run TypeScript type validation

## Dependency Notes

- `react`, `react-dom`, `react-router-dom` — core React and routing
- `vite`, `@vitejs/plugin-react` — fast bundling and dev server
- `typescript` — strict type safety everywhere
- `tailwindcss`, `postcss`, `autoprefixer` — utility-first styling and build tooling
- `framer-motion` — declarative animated interactions
- `lucide-react` — modern icon system for UI controls
- `next-themes` — theme switching with system preference support
- `clsx` + `tailwind-merge` — clean Tailwind class composition
- `class-variance-authority` — scalable variant-driven component styling
- `@shadcn/ui` — shadcn UI package installed for future component usage

## Next Steps

- Add dedicated page sections under `src/sections/`
- Create more component variants in `src/components/ui/`
- Add real portfolio content and project data
- Extend theme tokens and responsive design utilities
