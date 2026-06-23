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

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../util/useTheme.ts';
import './themeswitcher.css';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [pulling, setPulling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDark = theme === 'dark';

  const handleClick = () => {
    if (pulling) return;

    setPulling(true);
    toggleTheme();

    timerRef.current = setTimeout(() => {
      setPulling(false);
      timerRef.current = null;
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <button
      className="theme-switcher"
      type="button"
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <svg
        className={`switcher-svg${pulling ? ' is-pulling' : ''}`}
        viewBox="0 0 48 110"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Upside-down lightbulb — glass hangs from ceiling */}
        <g className="bulb">
          <rect x="13" y="0" width="10" height="10" rx="1.5" fill="currentColor" />
          <path d="M18 10 L18 14" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="28" r="13" className="bulb-glass" />
          {/* Filament */}
          <path
            d="M14 28 Q18 22 22 28"
            className="bulb-filament"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* Pull-rope with diamond-shaped knob */}
        <g className="rope">
          <line x1="38" y1="-20" x2="38" y2="90" stroke="currentColor" strokeWidth="2" />
          <polygon points="38,95 42,102 38,109 34,102" fill="currentColor" />
        </g>
      </svg>
    </button>
  );
}
