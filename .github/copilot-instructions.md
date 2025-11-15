# Portfolio Project Guidelines

## Project Overview
This is a React + TypeScript portfolio website using Vite, deployed to GitHub Pages at `/portfolio/` base path.

## Tech Stack
- **Framework**: React 19.1.0 with React Router DOM 7.7.0
- **Build Tool**: Vite 7.0.4
- **Language**: TypeScript 5.8.3
- **Styling**: Pure CSS with CSS variables (no CSS-in-JS, no Tailwind)
- **Deployment**: GitHub Pages with base path `/portfolio/`

## Design System

### Theme: Catppuccin (Mocha & Latte)
All colors MUST use CSS variables defined in `src/themes.css`:

**Background colors:**
- `--bg-dark` - Darkest background
- `--bg` - Main background
- `--bg-light` - Light background for cards

**Text colors:**
- `--text` - Primary text
- `--text-muted` - Secondary/muted text
- `--text-heading` - Heading text (pink in dark mode, maroon in light mode)

**Border colors:**
- `--border` - Standard borders
- `--border-muted` - Subtle borders
- `--highlight` - Accent borders (red)

**Action colors:**
- `--primary` - Primary action color
- `--secondary` - Secondary action color

**Alert colors:**
- `--danger`, `--warning`, `--success`, `--info`

**Gradients:**
- `--gradient-highlight` - For hover effects
- `--gradient-highlight-dark` - Alternative gradient

### Typography
Fonts are defined in `src/index.css`:

**Font families:**
- `--font-body`: 'Lato', sans-serif
- `--font-heading`: 'Playfair Display SC', serif

**Font sizing:**
- Base: `html { font-size: 62.5% }` (1rem = 10px)
- Body: `2rem` (20px)
- H1: `5rem` (50px) - Use `--font-heading`
- H2: `3rem` (30px) - Use `--font-heading`
- H3: Scaled appropriately
- All headings use `font-weight: 500` and `color: var(--text-heading)`

**Mobile scaling:**
- Below 600px: `html { font-size: 50% }` (1rem = 8px)

### CSS Standards

**DO:**
- Use CSS variables exclusively for colors
- Use `rem` units for sizing
- Use proper font families from CSS variables
- Add borders with `border: 2px solid var(--border-muted)` or similar
- Add shadows with `box-shadow: 0 2px 8px var(--bg-dark)`
- Use `border-radius: 8px` or `1rem` for rounded corners
- Include smooth transitions: `transition: all 0.3s ease`
- Add hover effects with `transform: translateY(-2px)` or `-4px`
- Use `backdrop-filter: blur(5px)` for glass effects
- Respect `@media (prefers-reduced-motion: reduce)` - defined in `preamble.css`

**DON'T:**
- Use hardcoded hex colors or rgba values
- Use generic fallback colors like `#fff`, `#888`, etc.
- Use CSS-in-JS or inline styles (except for rare dynamic cases)
- Use `px` units for text sizing
- Forget responsive design (`@media (max-width: 768px)`)

**Responsive Design:**
- Mobile-first approach
- Common breakpoint: `@media (max-width: 768px)`
- Mobile adjustments in `preamble.css`: below 600px gets `font-size: 50%`

### Component Patterns

**Cards:**
- Use `ActivityCard` component for list items (Projects, Experience, etc.)
- Cards have:
  - Background: `var(--bg-light)`
  - Border: `1px solid var(--border)` (some use `2px`)
  - Border radius: `1rem`
  - Padding: `1.5rem`
  - Margin: `2rem 0`
  - Hover shadow: `box-shadow: 0 0 8px var(--border)`

**Expandable Content:**
- Use `.expandable` class from `classes.css`
- Add `.open` class when expanded
- Includes transition for `max-height`, `opacity`, and `margin`

**Bubbles/Tags:**
- Use `.bubble` class from `classes.css`
- Background: `var(--bg)`
- Border: `var(--border) 1px solid`
- Border radius: `1rem`
- Padding: `0.2rem 1rem`
- Margin: `0.5rem`
- Hover: gradient background and highlight border

**Page Layout:**
- Use `PageLayout` component with `title` and optional `subtitle`
- Max width: `900px`
- Semi-transparent background with backdrop blur
- Border radius: `2rem`
- Shadow: `0 2px 16px var(--bg-dark)`
- Padding: `2rem 2rem 1rem 2rem`

## File Structure

### Project Organization
```
src/
├── components/          # Reusable components
│   ├── ActivityCard.*   # Card for projects/experiences
│   ├── PageLayout.*     # Page wrapper with header/footer
│   ├── NavBar.*        # Navigation
│   └── ...
├── Home/               # Home page components
├── Projects/           # Projects page
├── Experience/         # Experience page
├── assets/            # JSON data and icons
│   ├── projects.json
│   ├── experiences.json
│   └── icons/
├── themes.css         # Catppuccin theme variables
├── preamble.css       # Global resets and base styles
├── classes.css        # Utility classes (.bubble, .expandable)
├── index.css          # Typography and body styles
└── App.tsx            # Main app with routing
```

### Routing
- Uses React Router DOM v7
- Base path: `/portfolio/` (for GitHub Pages)
- Routes defined in `App.tsx`
- Navigation links in `NavBar` component
- Use `useNavigate()` for programmatic navigation
- Always use React Router's `<Link>` or `navigate()`, never `<a href>` for internal links

### Data Files
- JSON files in `src/assets/` directory
- Structure for projects/experiences:
```json
[
  {
    "heading": "Section Name",
    "projects": [...] or "experiences": [...]
  }
]
```

## Component Development

### TypeScript Interfaces
- Define props interfaces explicitly
- Use optional properties with `?` when appropriate
- Export interfaces if they might be reused

### React Patterns
- Functional components with hooks
- Use `React.FC<Props>` type annotation
- State management with `useState`
- Side effects with `useEffect`
- Navigation with `useNavigate()` from react-router-dom

### Imports Order
1. React imports
2. External library imports (react-router-dom, etc.)
3. Component imports
4. CSS imports
5. Asset imports (JSON, images)

### Copyright Headers
All files must include AGPL v3 copyright header:
```typescript
/*
 * Copyright (C) 2025 Adheesh Trivedi <adheeshtrivedi@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 */
```

## Build & Deployment

### Vite Configuration
- Base path: `/portfolio/`
- Public directory: `public/`
- SVGR plugin for SVG imports
- Build output: `dist/`

### Scripts
- `npm run dev` - Development server
- `npm run dev-host` - Dev server exposed to network
- `npm run build` - Production build
- `npm run preview` - Preview production build

### Asset Handling
- Static assets go in `public/` directory
- They are served from `${BASE_URL}/` in production
- Use `import.meta.env.BASE_URL` when referencing public assets in code
- Images/icons can be imported directly in components or referenced from public

## Accessibility & UX

### Motion
- Respect `prefers-reduced-motion` (handled in `preamble.css`)
- All transitions disabled for users who prefer reduced motion

### Selection
- Custom selection colors defined in `preamble.css`
- Uses `--selection-bg` and `--selection-text` variables

### Interactive Elements
- Cursor changes to pointer on interactive elements
- Hover states for all clickable items
- Smooth transitions (0.2s - 0.3s ease)
- Visual feedback with transform/shadow changes

## Common Patterns

### Adding a New Page
1. Create folder in `src/` (e.g., `NewPage/`)
2. Create component file: `NewPage.tsx`
3. Create styles: `NewPage.css`
4. Use `PageLayout` wrapper
5. Add route in `App.tsx`
6. Add to navbar in `App.tsx` pages array

### Creating Card Lists
1. Import `ActivityCard` component
2. Map over data array
3. Pass props matching `ActivityCardProps` interface:
   - `title` (required)
   - `affiliation` (optional)
   - `start` (required): `{ month: string, year: number }`
   - `end` (optional): `{ month: string, year: number }`
   - `description` (required): `string[]`
   - `skills` (optional): `string[]`
   - `links` (optional): `{ text: string, url: string }[]`
   - `isExpandable` (optional): `boolean`

### Handling External Links
- Use `target="_blank"` and `rel="noopener noreferrer"`
- Already implemented in `ActivityCard` links
- Stop event propagation with `onClick={e => e.stopPropagation()}`

## Performance Considerations

- Lazy load images when possible
- Use React Router's code splitting if app grows
- Optimize JSON data files (already pretty minimal)
- Vite handles bundling and optimization

## Testing & Quality

- ESLint configured with TypeScript rules
- Type checking with `tsc -b`
- No runtime errors should occur
- Test on both light and dark modes
- Test on mobile viewports (below 768px)
- Verify all routes work with base path

---

**Remember:** This portfolio prioritizes clean, maintainable code with consistent design patterns. When adding features, always match the existing style, use the design system variables, and follow the established component patterns.
