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
 * Project content, transcribed from cv.typ (Research Projects + Technical Projects).
 * External links are icon-only (as in cv.typ): GitHub, Dropbox report, book, file.
 */

export type ProjectGroup = {
  heading: string;
  entries: Entry[];
};

export const projectGroups: ProjectGroup[] = [
  {
    heading: 'Research Projects',
    entries: [
      {
        title: 'Practical study on embeddings between KS and LTS',
        affiliation: 'Mentor: Dr. Arpit Sharma, PhD. Shonak Saha',
        date: 'Dec 2025 – Apr 2026',
        links: [
          {
            icon: 'dropbox',
            label: 'Report (PDF)',
            href: 'https://www.dropbox.com/scl/fi/gi8ph0m3fbm3bztdnmmvw/bs-project.pdf?rlkey=kx55612n6a3dmze9xjnx5uvcs&st=mvkn174b&dl=0',
          },
        ],
        bullets: [
          'Built a Python framework unifying model checking across multiple backends (NuSMV, Spin, Storm) by embedding Labelled Transition Systems into Kripke Structures.',
          'Benchmarked and studied the feasibility of explicit model checking in embedded models.',
        ],
        tags: ['Model Checking', 'Python', 'Formal Methods'],
      },
      {
        title: 'On Robust Coloring of Graphs and ETH',
        affiliation: 'Mentor: Dr. Prafullkumar Tale',
        date: 'July 2025 – Jan 2026',
        links: [
          {
            icon: 'dropbox',
            label: 'Report (PDF)',
            href: 'https://www.dropbox.com/scl/fi/sryhu6iqr1htdpbcw8hb9/Robust_Coloring.pdf?rlkey=ndy34qaxtrfn9zpv5tzynt7yd&st=f418jyvl&dl=0',
          },
        ],
        bullets: [
          'Studied a relaxation of proper coloring in which edges with the same color are associated with some cost.',
          'Studied the Exponential Time Hypothesis and ETH-Preserving reductions.',
          'Investigated treewidth; applied tree decompositions to dynamic programming on hard problems.',
        ],
        tags: ['Graph Theory', 'Parameterized Algorithms', 'Treewidth'],
      },
      {
        title: 'Scientific Tool for Bridging Model Checking Ecosystems',
        affiliation: 'Mentor: Dr. Arpit Sharma, PhD. Shonak Shaha',
        date: 'Dec 2024 – Dec 2025',
        links: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/GALTOSM/' },
        ],
        bullets: [
          'The Model Checking ecosystem remains fragmented, with various tools and frameworks lacking seamless interoperability specifically between action-based and state-based model checking.',
          'Developing high-performance converters between action-labeled model checkers (CADP, mCRL2) and state-labeled model checkers (PRISM, Storm) to enable cross-ecosystem model checking.',
          'Emphasis on parser design, efficient graph transformations, and AST-driven translation, written in C++.',
        ],
        tags: ['C++', 'Parsers', 'Model Checking', 'Performance'],
      },
      {
        title: 'Reading Project on Graph Theory',
        affiliation: 'Mentor: Dr. Prafullkumar Tale',
        date: 'Jan 2024 – Apr 2024',
        links: [
          {
            icon: 'book',
            label: 'Book',
            href: 'https://books.google.co.in/books/about/A_First_Look_at_Graph_Theory.html?id=vLRNRebXuKYC',
          },
        ],
        bullets: [
          'Studied A First Look at Graph Theory (Clark & Holton) with problem solving.',
          'Reinforced concepts: graphs & their types, connectivity, traversals, matching problem, planarity.',
        ],
        tags: ['Graph Theory'],
      },
    ],
  },
  {
    heading: 'Technical Projects',
    entries: [
      {
        title: 'Nifty Network Analysis & Visualization Dashboard',
        date: 'Oct 2025 – Nov 2025',
        links: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/adhxtry/nifty-network-analysis' },
          {
            icon: 'file',
            label: 'Report (PDF)',
            href: 'https://www.dropbox.com/scl/fi/ce0myxe9vjwig55hgjws4/main.pdf?rlkey=zp2yls1yb8cix0rfwd1t2w0cc&st=seglxg08&dl=0',
          },
        ],
        bullets: [
          'Analyzed relationships among major Nifty companies and summarized insights in an interactive dashboard and formal report.',
          'Delivered clear visual findings on market structure, influential firms, and cluster patterns for a course project.',
        ],
        tags: ['Network Science', 'Data Visualization'],
      },
      {
        title: 'Extensively Customizable Exam Scheduler using Graph Coloring',
        affiliation: 'Vivek Kumar, Rahul Jana, Ayushman Shaha, Dr. Prafullkumar Tale',
        date: 'Oct 2024 – Jan 2025',
        links: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adhxtry/unisched' }],
        bullets: [
          'Exam schedules for 2,000+ students at my college were being created manually — a lot of effort.',
          'Developed an engine that assigns exams to time slots & halls, minimizing same-day conflicts (≤24h).',
          'Uses graph coloring and randomized optimization heuristics to reach near-optimal scheduling.',
          'Supports multi-hall allocation when enrollment exceeds single capacity.',
        ],
        tags: ['Python', 'Graph Coloring', 'Optimization', 'NetworkX'],
      },
      {
        title: 'Texture Classification & Face Clustering for Image Search',
        date: 'Sep 2024 – Nov 2024',
        links: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adhxtry/nomadium' }],
        bullets: [
          'Addresses the common challenge of navigating through a large collection of images.',
          'Enables efficient filtering and search for images by face or texture.',
          'Implemented batching to control GPU memory and multiple texture descriptors for retrieval precision.',
        ],
        tags: ['Computer Vision', 'Python', 'Machine Learning'],
      },
      {
        title: 'Context-aware Bag-of-Words Chatbot',
        date: 'Oct 2021 – Dec 2021',
        links: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adhxtry/tensorBot' }],
        bullets: [
          'Built a context-aware chatbot supporting tasks like to-do lists, word definitions, note taking, jokes, and time queries across timezones.',
          'Trained a sequential neural network in TensorFlow on a custom dataset tailored to project requirements.',
        ],
        tags: ['Python', 'TensorFlow', 'NLP'],
      },
      {
        title: 'General Purpose Discord Bot',
        date: 'Mar 2021',
        links: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adhxtry/UFO-BOT' }],
        bullets: [
          'Python project that utilized PostgreSQL to implement a feature-rich Discord bot with moderation, games, and music.',
        ],
        tags: ['Python', 'PostgreSQL', 'discord.py'],
      },
    ],
  },
];
