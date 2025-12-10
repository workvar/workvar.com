import { BellOff, FileWarning, FlagOff, LucideIcon } from 'lucide-react';
import { NavItem, Feature, Product, Resource, SocialLink } from './types';
import navItemsData from './data/navItems.json';
import coreFeaturesData from './data/coreFeatures.json';
import productsData from './data/products.json';
import socialLinksData from './data/socialLinks.json';

// Icon mapping for features
const iconMap: Record<string, LucideIcon> = {
  BellOff,
  FileWarning,
  FlagOff,
};

// Export NAV_ITEMS from JSON with safety check
export const NAV_ITEMS: NavItem[] = (Array.isArray(navItemsData) ? navItemsData : []) as NavItem[];

// Export CORE_FEATURES from JSON with icon mapping and safety check
export const CORE_FEATURES: Feature[] = (Array.isArray(coreFeaturesData) ? coreFeaturesData : []).map((feature) => ({
  ...feature,
  icon: iconMap[feature.icon] || BellOff, // Fallback to BellOff if icon not found
})) as Feature[];

// Export PRODUCTS from JSON with safety check
export const PRODUCTS: Product[] = (Array.isArray(productsData) ? productsData : []) as Product[];

// Export SOCIAL_LINKS from JSON with safety check
export const SOCIAL_LINKS: SocialLink[] = (Array.isArray(socialLinksData) ? socialLinksData : []) as SocialLink[];

// Resources are now loaded server-side to avoid fs module issues in client components
// Use getResources() function in server components instead
export async function getResources(): Promise<Resource[]> {
  // Dynamic import to ensure this only runs server-side
  const { getBlogs } = await import('@/lib/blogs');
  const blogs = getBlogs();
  return Array.isArray(blogs) ? blogs.map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    category: blog.category as Resource['category'],
    title: blog.title,
    date: blog.date,
    readTime: blog.readTime,
    summary: blog.summary,
  })) : [];
}

// Legacy export for backwards compatibility (will be empty array in client)
// Use getResources() in server components instead
export const RESOURCES: Resource[] = [];