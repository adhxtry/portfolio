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

import React, { useState } from "react";
import "./ListAccordion.css";

interface ListAccordionProps {
  title: string;
  items: string[];
}

const ListAccordion: React.FC<ListAccordionProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`list-accordion-card${open ? " open" : ""}`}>
      <div className="list-accordion-header" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className={`arrow${open ? " open" : ""}`}>▼</span>
      </div>
      <ul className="list-accordion-list" style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}>
        {items.map((item) => (
          <li key={item} className="list-accordion-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAccordion;
