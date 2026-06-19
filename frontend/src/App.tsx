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

import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [linkHover, setLinkHover] = useState(false);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const card: React.CSSProperties = {
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '1em 1.2em',
    background: 'var(--bg-secondary)',
    marginBottom: '1em',
  };

  const swatch: React.CSSProperties = {
    display: 'inline-block',
    width: '1em',
    height: '1em',
    borderRadius: '3px',
    verticalAlign: 'middle',
    marginRight: '0.5em',
    border: '1px solid var(--border)',
  };

  return (
    <div style={{ maxWidth: '36em', margin: '2em auto', padding: '1em' }}>
      <button
        onClick={toggleTheme}
        style={{
          fontFamily: 'Sniglet, cursive',
          fontSize: '1rem',
          padding: '0.5em 1.2em',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          marginBottom: '2em',
        }}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>

      <div style={{ position: 'relative', width: 240, height: 240, marginBottom: '1em' }}>
        <img
          src="./pixel-me-light.png"
          alt=""
          style={{ position: 'absolute', width: 240, height: 240, imageRendering: 'pixelated', opacity: theme === 'light' ? 1 : 0, transition: 'opacity 0.2s ease-in' }}
        />
        <img
          src="./pixel-me-dark.png"
          alt=""
          style={{ position: 'absolute', width: 240, height: 240, imageRendering: 'pixelated', opacity: theme === 'dark' ? 1 : 0, transition: 'opacity 0.2s ease-in' }}
        />
      </div>
      <h1>Adheesh Trivedi</h1>
      <p>
        MTech (AI) at IISc. Prev BS in CS @ IISER Bhopal. Into formal methods,
        graph theory, ML. This page tests the light/dark theme system.
      </p>

      <div style={card}>
        <span style={{ ...swatch, background: 'var(--bg-primary)' }} />
        <code>--bg-primary</code> &nbsp;
        <span style={{ ...swatch, background: 'var(--bg-secondary)' }} />
        <code>--bg-secondary</code>
        <br />
        <span style={{ color: 'var(--text-primary)' }}>--text-primary</span> &nbsp;
        <span style={{ color: 'var(--text-secondary)' }}>--text-secondary</span> &nbsp;
        <span style={{ color: 'var(--text-muted)' }}>--text-muted</span> &nbsp;
        <span style={{ color: 'var(--text-highlight)' }}>--text-highlight</span>
      </div>

      <div style={card}>
        <div style={{ border: '1px solid var(--border)', padding: '0.5em', borderRadius: '4px' }}>
          <code>--border</code> card
        </div>
        <br />
        <div style={{ border: '1px solid var(--border-highlight)', padding: '0.5em', borderRadius: '4px' }}>
          <code>--border-highlight</code> card
        </div>
      </div>

      <div style={card}>
        <span style={{ color: 'var(--accent-success)' }}>● --accent-success</span><br />
        <span style={{ color: 'var(--accent-warning)' }}>● --accent-warning</span><br />
        <span style={{ color: 'var(--accent-info)' }}>● --accent-info</span>
      </div>

      <div style={card}>
        <a
          href="#"
          onMouseEnter={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
          style={{ color: linkHover ? 'var(--link-hover)' : 'var(--link)' }}
        >
          --link (hover me)
        </a>
        <br />
        <span style={{ background: 'var(--selection-bg)', color: 'var(--selection-text)', padding: '0.2em 0.4em' }}>
          --selection-bg / --selection-text
        </span>
      </div>
    </div>
  );
}
