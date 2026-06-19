# AGENTS.md — Portfolio

Single-page portfolio site. Vite + React 19 + TypeScript 6 + React Router 7. AGPL-3.0.

## Layout

```
frontend/          # entire app
  src/
    main.tsx        # entry: mounts <Router basename="/portfolio">
    App.tsx         # routes: /, /projects, /experience
    pages/          # EMPTY — page components not yet created
    components/     # EMPTY
    data/           # profile, projects, experience typed content
    styles/         # theme.css (placeholder), base.css (reset + fonts)
    types.ts        # shared Entry, EntryLink, Social types
  index.html        # GA conditional load via %VITE_GA_ID%
  vite.config.ts    # base: '/portfolio/', plugin-react
  Dependencies: @fortawesome/* (free-brands, free-solid, react-fontawesome)
```

## Commands

Run from `frontend/`:
```
bun run build        # tsc -b && vite build
bun run lint         # eslint .  (flat config)
```

`build` does typecheck first (`tsc -b`) — no separate typecheck script. Do **not** start dev server.

## Quirks

- **No tests.** No test framework installed.
- **Pages & components dirs empty.** Any page (Home, Projects, Experience) or component must be created from scratch.
- **`verbatimModuleSyntax`** in tsconfig — use `import type` for type-only imports. `erasableSyntaxOnly` — no enums, no namespaces, no `parameter properties`.
- **Base path `/portfolio/`** — hardcoded in both `vite.config.ts` and `<Router basename="/portfolio">`. Keep in sync.
- **Theme system** — `data-theme="light"` / `"dark"` on `<html>`. `theme.css` defines CSS custom props per theme: bg, text, border, accent, link, selection. Transitions animate in 0.2s (prefers-reduced-motion respected).
- **CSS layers** via `@import` in `index.css`: `theme.css` → `base.css`.
- **AGPL-3.0** — every source file must carry the copyright header. Run `python add_copyright.py` to auto-add.
- **VITE_GA_ID** — optional GA4 measurement ID. Set in `.env` or CI vars. Only loads if non-empty.
- **Fonts:** Merienda + Sniglet via `@import` in `base.css`. Merienda = body, Sniglet = headings.
- **CI** (`.github/workflows/vite-build-deploy.yml`) — builds on push to `portfolio` or `main`, deploys to GitHub Pages. Copies `index.html` → `404.html` for SPA routing.
- **VSCode:** `editor.formatOnSave: true`, `editor.tabSize: 2`.
