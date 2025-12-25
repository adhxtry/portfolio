
# Adheesh Trivedi – Creative Portfolio

This is a modern, creative portfolio built with **React**, **TypeScript**, and **Vite**. It features a beautiful, unified design and showcases my interests, projects, and more. Moreover, it uses catppuccin theme for a pleasing aesthetic. This is not out of the box template. This repository hosts my personal portfolio code which you can fork and customize for your own use. However, the customization is very easy, as all the data is stored in JSON files and the components are well structured.

## Features

- **Modern UI**: Consistent, elegant layout with a custom `PageLayout` component.
- **Dark/Light Theme**: Toggle between dark and light modes.
- **Responsive Design**: Looks great on all devices.
- **Profile & Socials**: See profile, interests, and connect via social links.
- **Projects**: Explore technical and creative projects.

## Quick Start

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app locally:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   # Preview the build
   npm run preview
   ```

## Project Structure

- `src/components/` – Reusable UI components (NavBar, Profile, CategoryList, PageLayout, etc.)
- `src/Home` – Home page. Similar folders for pages are `src/Projects`, `src/Experience`, etc.
- `src/assets/` – Images, icons, and data
- `src/index.css` – Global and creative page styles
- `src/themes.css` – Theme variables (light/dark)
- `src/preamble.css` – CSS resets and base styles

## Customization

- Add your own projects in `src/Projects/Projects.tsx`.
- Update your profile and interests in `src/assets/profileData.json` and `src/components/Profile.tsx`.
- There are similar json files for experience, projects, etc.
- Tweak styles in `src/index.css` and `src/themes.css` for a unique look.

## Google Analytics

This project can include Google Analytics at build time by setting an environment variable `VITE_GA_ID`.

This is already configured in the GitHub Actions workflow for building and deploying the site. You can set the `VITE_GA_ID` variable in your repository environment variables (not secrets).

During the build Vite will replace the `%VITE_GA_ID%` placeholder in `index.html` with the value you provide. The site will only load the gtag script when `VITE_GA_ID` is non-empty.

## 📦 Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

---

Made with ❤️ by Adheesh Trivedi
