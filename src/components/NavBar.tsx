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

import "./NavBar.css";

import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

interface NavBarProps {
  pages: string[];
}

/**
 * NavBar component for the application.
 * This component renders a floating, rounded navigation bar with
 * animated theme toggle and sliding active indicator.
 *
 * @returns JSX Element representing the NavBar
 */
function NavBar({ pages }: NavBarProps) {
  const location = useLocation();
  const navLinksRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // MENU HANDLER //
  const [isMenuOpen, setIsOpen] = useState(false);

  // THEME HANDLER //
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") != null
      ? localStorage.getItem("theme") === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    updateTheme(isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  // ACTIVE INDICATOR HANDLER //
  useEffect(() => {
    const updateIndicator = () => {
      if (!navLinksRef.current || !indicatorRef.current) return;

      const activeLink = navLinksRef.current.querySelector(
        ".navbar-link.active"
      ) as HTMLElement;

      if (activeLink) {
        const navRect = navLinksRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        indicatorRef.current.style.width = `${linkRect.width}px`;
        indicatorRef.current.style.height = `${linkRect.height}px`;
        indicatorRef.current.style.left = `${linkRect.left - navRect.left}px`;
        indicatorRef.current.style.top = `${linkRect.top - navRect.top}px`;
        indicatorRef.current.style.opacity = "1";
      } else {
        indicatorRef.current.style.opacity = "0";
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [location.pathname]);

  // Build all nav items
  const allPages = ["Home", ...pages];

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Theme Toggle Button */}
        <button
          className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
          onClick={handleThemeToggle}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="theme-icon-wrapper">
            <SunIcon className="theme-icon sun-icon" />
            <MoonIcon className="theme-icon moon-icon" />
          </div>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation Links */}
        <ul
          ref={navLinksRef}
          className={`navbar-links-container ${isMenuOpen ? "open" : ""}`}
        >
          {/* Sliding indicator */}
          <div ref={indicatorRef} className="nav-indicator"></div>

          {allPages.map((page) => {
            const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
            return (
              <li key={page} className="navbar-item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                  onClick={handleNavClick}
                >
                  {page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
