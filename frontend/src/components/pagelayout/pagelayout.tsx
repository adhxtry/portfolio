import React from "react";
import "./pagelayout.css";

interface PageLayoutProps {
  children: React.ReactNode;
}

const currentYear = new Date().getFullYear();

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <section className="page-layout">
    <div className="page-content">{children}</div>
    <footer className="page-footer">
      <p>&copy; {currentYear} Adheesh Trivedi. All rights reserved.</p>
    </footer>
  </section>
);

export default PageLayout;