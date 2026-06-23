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

import type { Entry } from './types';

/**
 * Experience content, transcribed from cv.typ.
 * Groups: Education, Talks & Teaching, Leadership & Engagement, Achievements, Co-curricular.
 */

export type ExperienceGroup = {
  heading: string;
  entries: Entry[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    heading: 'Education',
    entries: [
      {
        title: 'IISER Bhopal',
        affiliation: 'B.S., Computer Science & Engineering',
        date: {
          from: '2022',
          to: '2026',
        },
        location: 'Bhopal, India',
        links: [],
        bullets: [
          'GPA: 9.34/10 (3.74/4).',
          'Coursework: Data Structures & Algorithms, Algorithms (Advanced), Theory of Computation, Software Modelling & Verification, Compiler Design, Modern Cryptography, Information Theory & Coding, Operating Systems, Computer Networks, Machine Learning, Database Systems, Linear Algebra, Discrete Mathematics, Applied Optimization, Network Sciences.',
        ],
      },
    ],
  },
  {
    heading: 'Talks & Teaching',
    entries: [
      {
        title: 'Teaching Assistant — Theory of Computation',
        affiliation: 'Instructed by Dr. Arpit Sharma',
        date: {
          from: 'Aug 2025',
          to: 'Dec 2025',
        },
        links: [],
        bullets: [],
      },
      {
        title: 'Fast Matrix Multiplication Algorithms',
        affiliation: 'Math Club @ IISER Bhopal',
        date: {
          from: '1 Sept 2023',
          to: null,
        },
        links: [
          {
            // From the fontawesome icon
            icon: 'chalkboard',
            label: 'Slides / code',
            href: 'https://github.com/adhxtry/iiserbCodeCollective/tree/main/1_StrassenMultiplication',
          },
        ],
        bullets: [],
      },
    ],
  },
  {
    heading: 'Leadership & Engagement',
    entries: [
      {
        title: 'Club Coordinator',
        affiliation: 'Coding Club @ IISER Bhopal',
        date: {
          from: 'May 2024',
          to: 'May 2025',
        },
        links: [],
        bullets: [
          'Fostered competitive programming skills and algorithmic thinking among students.',
          'Organized onsite competitive programming contests; facilitated open discussions & tutorials.',
          'Mentored junior members and led workshops on advanced topics.',
        ],
      },
      {
        title: 'Hackathon Organizer — Armacode 0',
        affiliation: 'IISER Bhopal × IIIT Bhopal',
        date: {
          from: 'Jan 2024',
          to: 'Apr 2024',
        },
        links: [],
        bullets: [
          'Prepared questions for an online round with over 500 applicants.',
          'Co-organized a 35-hour national hackathon; collaborated with faculty and industry experts on problem design and judging of 12 onsite teams.',
        ],
      },
    ],
  },
  {
    heading: 'Academic Achievements',
    entries: [
      {
        title: 'GATE Data Science & Artificial Intelligence',
        affiliation: 'Rank 29 (99.96 %ile)',
        date: {
          from: '2026',
          to: null,
        },
        links: [],
        bullets: [],
      },
      {
        title: 'GATE Computer Science',
        affiliation: 'Rank 147 (99.93 %ile)',
        date: {
          from: '2026',
          to: null,
        },
        links: [],
        bullets: [],
      },
      {
        title: 'GATE Data Science & Artificial Intelligence',
        affiliation: 'Rank 352 (99.38 %ile)',
        date: {
          from: '2025',
          to: null,
        },
        links: [],
        bullets: [],
      },
    ],
  },
];

export const cocurricular = [
  'Music (Guitar)',
  'Competitive Programming',
  'Speed Typing',
] as const;
