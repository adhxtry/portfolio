/**
 * Shared content types.
 *
 * A single `Entry` shape drives project, experience, and education cards,
 * keeping `EntryCard` reusable across every section of the site.
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
  date?: {
    from: string;
    to: string | null;
  };
  location?: string;
  links?: EntryLink[];
  bullets?: string[];
  tags?: string[];
};

export type Social = {
  label: string;
  href: string;
  /** Short handle shown beside the avatar (e.g. "@adhxtry"). */
  handle: string;
  /** Maps to a brand icon in the social rail. */
  icon: 'github' | 'linkedin' | 'x';
};
