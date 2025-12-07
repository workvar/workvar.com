import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  image: string;
  ctaUrl: string;
}

export interface Resource {
  id: string;
  slug?: string;
  category: 'Blog' | 'Guide' | 'Documentation' | 'Philosophy' | 'Manifesto';
  title: string;
  date: string;
  readTime: string;
  summary: string;
}