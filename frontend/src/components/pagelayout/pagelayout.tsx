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

import React from "react";
import "./pagelayout.css";

interface PageLayoutProps {
  children: React.ReactNode;
}

const currentYear = new Date().getFullYear();

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <section className="page-layout">
    {/* Bounds the max width of the content */}
    <div className="page-content">{children}</div>
    <footer className="page-footer">
      <p>
        &copy; {currentYear} Adheesh Trivedi. Licensed under the{' '}
        <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer">
          GNU AGPLv3
        </a>
        .
      </p>
    </footer>
  </section>
);

export default PageLayout;