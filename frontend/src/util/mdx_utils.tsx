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

import type { ComponentType } from 'react';
import { iconComponents } from '../components/icons';

type MDXComponents = Record<string, ComponentType | string>;

const components: MDXComponents = {
  ...iconComponents,
  // Open external links in a new tab
  a: ({ href, ...props }) => {
    const isExternal =
      href?.startsWith("http://") || href?.startsWith("https://");

    return (
      <a
        href={href}
        {...props}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      />
    );
  },
};

/**
 * Wraps an MDX module so its rendered content can use icon components
 * (e.g. `<IconInstitute />`, `<IconGithub />`) directly in markdown.
 *
 * In MDX v3, compiled modules accept a `components` prop — no context needed.
 *
 * Usage:
 *   import Bio from '../content/bio.mdx';
 *   const BioContent = wrapMDX(Bio);
 *   // ... <BioContent /> ...
 */
export function wrapMDX(Module: ComponentType<{ components?: MDXComponents }>) {
  function Wrapped(props: Record<string, unknown>) {
    return <Module components={components} {...props} />;
  }
  Wrapped.displayName = 'MDXWrapped';
  return Wrapped;
}
