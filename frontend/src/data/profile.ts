import type { Social } from '../types';


export const profile = {
  name: 'Adheesh Trivedi',
  location: 'IISER Bhopal, India',
  email: 'adheeshtrivedi@gmail.com',
  /** Hosted CV PDF (kept in a sibling user-pages repo). */
  resumeUrl: 'https://adhxtry.github.io/adhxtry/cv_adheesh.pdf',
  avatarSrcPrefix: './pixel-me',
  avatarAlt: 'Pixel-art avatar of me',
  status:
    "MTech (AI) @ IISc",
  bio: [
    "I completed my B.S. in Computer Science & Engineering at IISER Bhopal, where I developed a strong foundation in algorithms, model checking (formal verification), and machine learning.",
    "I'm passionate about exploring the intersection of AI and Theoretical Computer Science, and currently am pursuing MTech in Artificial Intelligence.",
    "Always excited to meet new people, you can reach me via email or connect with me on GitHub, LinkedIn, or X.",
  ],
} as const;


/** Left-rail + home social links. Email handled separately (mailto). */
export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/adhxtry', handle: '@adhxtry', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/AdhTri001',
    handle: 'in/AdhTri001',
    icon: 'linkedin',
  },
  { label: 'X', href: 'https://x.com/AdhTri001', handle: '@AdhTri001', icon: 'x' },
];
