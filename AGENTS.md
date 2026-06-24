# AGENTS.md — Portfolio

Single-page portfolio site. Vite + React 19 + TypeScript 6 + React Router 7. AGPL-3.0.

## Layout

```
frontend/               # entire app
  src/
    main.tsx            # entry: mounts <Router basename="/portfolio">
    App.tsx             # routes: / via <Routes> → <Home>
    pages/
      home/
        home.tsx        # responsive grid: sidebar (avatar, name, status, socials) + main (bio)
        home.css
    components/
      pagelayout/
        pagelayout.tsx   # <PageLayout> wrapper for all pages: content + footer
        pagelayout.css
      icons.tsx         # iconComponents map (IconGithub, IconInstitute, IconXTwitter, etc.)
    content/
      data.ts           # profile config: name, email, resumeUrl, avatar prefix, socials[]
      bio.mdx           # bio body rendered by home.tsx via wrapMDX
    util/
      mdx_utils.tsx     # wrapMDX(Module) — injects icon components into any MDX file
    styles/
      theme.css         # CSS custom props per data-theme (light/dark)
      base.css          # reset, fonts (Merienda body, Lato headings)
    mdx.d.ts            # *.mdx module declaration with components prop
    index.css           # @import theme.css → base.css; global avatar-light/dark rules
  index.html            # GA conditional load via %VITE_GA_ID%
  vite.config.ts        # base: '/portfolio/', @mdx-js/rollup + @vitejs/plugin-react
```

### Dependencies

- `@fortawesome/*` (free-brands, free-solid, react-fontawesome)
- `@mdx-js/react` (peer for compiled MDX)
- `@mdx-js/rollup` (Vite plugin that compiles `.mdx`)
- `react-router-dom` v7

## Commands

Run from `frontend/`:
```
bun run build        # tsc -b && vite build
bun run lint         # eslint .  (flat config)
```

`build` does typecheck first (`tsc -b`) — no separate typecheck script. Do **not** start dev server.

## Home page

- **Layout:** CSS Grid `auto 1fr` — sidebar (avatar, name, status, socials) on the left, main (bio) on the right.
- **Responsive:** At ≤768px collapses to single column, avatar shrinks to 120px.
- **Avatar:** Two `<img>` tags (light/dark). CSS hides the wrong one via `[data-theme="dark"]`.
- **Socials:** Rendered from `data.ts` array using FontAwesome icons. Email uses mailto:.
- **Bio:** `bio.mdx` imported and wrapped via `wrapMDX(Bio)` which passes `components` prop with all icon components (IconInstitute, IconGithub, etc.) — usable as `<IconInstitute />` directly in `.mdx` files.

## MDX

- `.mdx` files are real — used for content that benefits from markdown (bio).
- `@mdx-js/rollup` compiles them at build time into React components.
- Import pattern: `import Bio from '../content/bio.mdx'` then `wrapMDX(Bio)`.
- `wrapMDX` (from `util/mdx_utils.tsx`) passes `components` prop with every icon from `components/icons.tsx`.
- Type declaration in `mdx.d.ts` exposes `components?: MDXComponents` on the default export.
- **MDX comments** must use `{/* ... */}` JSX syntax, not HTML `<!-- -->`.

## Quirks

- **No tests.** No test framework installed.
- **`verbatimModuleSyntax`** in tsconfig — use `import type` for type-only imports. `erasableSyntaxOnly` — no enums, no namespaces, no `parameter properties`.
- **Base path `/portfolio/`** — hardcoded in both `vite.config.ts` and `<Router basename="/portfolio">`. Keep in sync.
- **Theme system** — `data-theme="light"` / `"dark"` on `<html>`. `theme.css` defines CSS custom props per theme: bg, text, border, accent, link, selection. Transitions animate in 0.2s (prefers-reduced-motion respected).
- **CSS layers** via `@import` in `index.css`: `theme.css` → `base.css`.
- **AGPL-3.0** — every source file must carry the copyright header. Run `python add_copyright.py` from project root to auto-add (handles .tsx, .ts, .jsx, .js, .css, .html). **Do not write copyright headers manually** — the script injects them in the correct format (CSS `/* */` or HTML `<!-- -->`).
- **VITE_GA_ID** — optional GA4 measurement ID. Set in `.env` or CI vars. Only loads if non-empty.
- **Fonts:** Merienda + Lato via `@import` in `base.css`. Merienda = body, Lato = headings.
- **CI** (`.github/workflows/vite-build-deploy.yml`) — builds on push to `portfolio` or `main`, deploys to GitHub Pages. Copies `index.html` → `404.html` for SPA routing.
- **VSCode:** `editor.formatOnSave: true`, `editor.tabSize: 2`.
