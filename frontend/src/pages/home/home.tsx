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


import { name, avatarSrcPrefix, avatarAlt, status, socials } from '../../content/data';
import Bio from '../../content/bio.mdx';
import { wrapMDX } from '../../util/mdx_utils';

import './home.css';


const BioContent = wrapMDX(Bio);

export default function Home() {
  return (
    <div className="home-grid">
      <aside className="home-sidebar">
        <div className="home-avatar">
          {/* Different variation of avatar based on theme */}
          <img
            src={`${avatarSrcPrefix}-light.png`}
            alt={avatarAlt}
            className="avatar-light"
          />
          <img
            src={`${avatarSrcPrefix}-dark.png`}
            alt={avatarAlt}
            className="avatar-dark"
          />
        </div>
        <h1 className="home-name">{name}</h1>
        <p className="home-status">{status}</p>
        <div className="home-socials">
          {socials.map(s => (
            <a key={s.label} href={s.href} title={s.handle}>
              <s.icon />
            </a>
          ))}
        </div>
      </aside>
      <main className="home-content">
        <BioContent />
      </main>
    </div>
  );
}
