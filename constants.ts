import { BellOff, FileWarning, FlagOff } from 'lucide-react';
import { NavItem, Feature, Product, Resource } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Artifacts', path: '/products' },
  { label: 'Our Story', path: '/about' },
  { label: 'Library', path: '/blogs' },
  { label: 'Correspondence', path: '/contact' },
];

export const CORE_FEATURES: Feature[] = [
  {
    title: 'Ding Ding!',
    description: 'Your attention is constantly pulled into pings, feeds, and distractions. You pick your phone on every single notification.',
    icon: BellOff,
  },
  {
    title: 'Productivity Crushed',
    description: 'The never ending noise is crushing your productivity and you are on your phone when you should be working.',
    icon: FileWarning,
  },
  {
    title: 'You dread boredom',
    description: "Every chance you get, you are on your phone. You dread boredom. You are not present in your life. You are not present in your work.",
    icon: FlagOff,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'sileotube',
    name: 'SileoTube',
    tagline: 'A calming, decluttered YouTube experience.',
    description: "YouTube is an incredible tool for learning and inspiration, but it's also filled with distractions engineered to keep you scrolling. SileoTube helps you reclaim your attention by removing distractions automatically.",
    features: ['Clean Landing page', 'Zen Viewing Mode', 'Shorts Recommendations Removal', 'Shorts Viewing removal.'],
    cta: 'Stop doomscrolling',
    image: 'https://ik.imagekit.io/canarygrapher/workvar/main-website/project-showcase/tr:e-grayscale/sileotube_4Kab9GbM3.jpeg',
  },
  {
    id: 'patty',
    name: 'Patty',
    tagline: "Your AI project manager.",
    description: 'Everyone is vibe coding projects, but only a few are planning before they start. Patty is your AI project manager that helps you plan your projects before you start pending those expensive AI tokens.',
    features: ['Deep context awareness', 'Auto-sprints', 'Perfect user-stories', 'Auto test cases'],
    cta: 'Start planning',
    image: 'https://ik.imagekit.io/canarygrapher/workvar/main-website/project-showcase/tr:e-grayscale/patty_JcBVaygq_R.jpeg',
  }
];

export const RESOURCES: Resource[] = [
  {
    id: '1',
    category: 'Philosophy',
    title: 'The Myth of Multitasking',
    date: 'Oct 12, 2023',
    readTime: '8 min read',
    summary: 'Why the human mind was never meant to be in two places at once, and how to return to the present.',
  },
  {
    id: '2',
    category: 'Guide',
    title: 'Building Your Local Garden',
    date: 'Nov 05, 2023',
    readTime: '12 min read',
    summary: 'A technical tome on configuring your digital environment to exist independently of the cloud.',
  },
  {
    id: '3',
    category: 'Manifesto',
    title: 'Reclaiming the Attention Economy',
    date: 'Dec 10, 2023',
    readTime: '5 min read',
    summary: 'Our declaration of independence from the algorithms that seek to harvest our time.',
  },
];