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
import "./CategoryList.css";

interface CategoryListProps {
  category: string;
  items: string[];
}

const CategoryList: React.FC<CategoryListProps> = ({ category, items }) => (
  <div className="category-list">
    <h2>{category}</h2>
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="bubble">{item}</li>
      ))}
    </ul>
  </div>
);

export default CategoryList;
