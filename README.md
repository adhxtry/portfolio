# 🧑‍🔬 Academic Portfolio

Welcome to the source of my little corner of the internet. It's (currently) a single-page portfolio built with care,
a dash of whimsy, and entirely too much time spent on the theme switcher.

> Why is it so much over-engineered for a single-page portfolio?

Because I can. And because I want it so that I can add more pages later without having to rewrite the whole thing.

## Personality

- Warm, sepia-toned light mode that feels like an old library.
- Dark mode that's more "cozy nocturne" than "hacker terminal."
- A lightbulb hanging from the ceiling with a pull-rope that toggles between them.
- A pixel art avatar of me (it definitely not took me 3 tries to get it right).

## Stack

| Thing | What |
|---|---|
| **Vite** | Fast build tool |
| **React 19** | The UI library |
| **TypeScript 6** | The safety net |
| **React Router 7** | Client-side routing |
| **MDX** | Markdown + JSX for content |
| **FontAwesome** | Icons for socials |
| **Bun** | Package manager & runtime |

## Getting started

From the `frontend/` directory:

```bash
bun install
bun run build    # typecheck + production build
bun run lint     # ESLint
bun run dev      # for local dev server
bun run preview  # for local production preview (after build)
```

## Project layout

```
frontend/
├── src/
│   ├── App.tsx              # Routes
│   ├── pages/home/          # Home page (sidebar + bio)
│   ├── components/          # Reusable bits (layout, theme switcher)
│   ├── content/             # Profile data, MDX bio
│   ├── util/                # Helpers (MDX wrapper, theme hook)
│   └── styles/              # CSS custom props, reset, fonts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Deploy

Pushes to `portfolio` or `main` automatically build and deploy to GitHub Pages via the included workflow.

## License

AGPL-3.0 — see the license file or each source header.
