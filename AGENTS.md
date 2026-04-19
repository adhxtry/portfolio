# Agent Guide

## Commands
- Build & Typecheck: `npm run build`
- Lint: `npm run lint`
- Dev Server: `npm run dev`

## Architecture
- **Data-Driven**: UI is decoupled from content. Update JSON files in `src/assets/` to change site content.
- **Pages**: View logic resides in `src/Home/`, `src/Projects/`, and `src/Experience/`.
- **Components**: Shared UI building blocks in `src/components/`.
- **Styling**: Catppuccin theme. Colors defined in `src/themes.css`.
