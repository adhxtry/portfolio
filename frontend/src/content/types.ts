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


export type LinkIcon =
  | 'github'
  | 'dropbox'
  | 'file'
  | 'book'
  | 'link'
  | 'chalkboard';

export type EntryLink = {
  /** Brand/object icon rendered as the link's visible text (as in cv.typ). */
  icon: LinkIcon;
  href: string;
  /** Accessible label / tooltip (e.g. "GitHub repository"). */
  label?: string;
};

export type Entry = {
  title?: string;
  /** Mentor, institution, company, etc. */
  affiliation?: string;
  date?: string | {
    from: string;
    to: string | null;
  };
  location?: string;
  links?: EntryLink[];
  bullets?: string[];
  tags?: string[];
};