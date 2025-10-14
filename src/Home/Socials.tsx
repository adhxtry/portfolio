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


import "./Socials.css";

import githubIcon from "../assets/icons/github.svg?react";
import linkedinIcon from "../assets/icons/linkedin.svg?react";
import mailIcon from "../assets/icons/mail.svg?react";
import xIcon from "../assets/icons/x.svg?react";
import DocsIcon from "../assets/icons/docs.svg?react";

interface SocialsProps {
  socials?: {
    github?: string;
    linkedin?: string;
    mail?: string;
    x?: string;
  },
  resumeUrl: string;
}

const SOCIALS_ICONS = {
  github: githubIcon,
  linkedin: linkedinIcon,
  mail: mailIcon,
  x: xIcon,
};

function Socials({ socials, resumeUrl }: SocialsProps) {
  return (
    <div className="socials">
      {socials &&
        Object.entries(socials).map(([key, value]) => {
          const Icon = SOCIALS_ICONS[key as keyof typeof SOCIALS_ICONS];
          return (
            value && (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="social-icon" title={key} />
              </a>
            )
          );
        })
      }

      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        <DocsIcon className="resume-icon" title="Resume" />
        Resume
      </a>
    </div >
  );
}

export default Socials;
