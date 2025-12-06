import { BellOff, FileWarning, FlagOff, LucideIcon } from 'lucide-react';
import { NavItem, Feature, Product, Resource } from './types';
import navItemsData from './data/navItems.json';
import coreFeaturesData from './data/coreFeatures.json';
import productsData from './data/products.json';

// Icon mapping for features
const iconMap: Record<string, LucideIcon> = {
  BellOff,
  FileWarning,
  FlagOff,
};

// Export NAV_ITEMS from JSON
export const NAV_ITEMS: NavItem[] = navItemsData as NavItem[];

// Export CORE_FEATURES from JSON with icon mapping
export const CORE_FEATURES: Feature[] = coreFeaturesData.map((feature) => ({
  ...feature,
  icon: iconMap[feature.icon] || BellOff, // Fallback to BellOff if icon not found
})) as Feature[];

// Export PRODUCTS from JSON
export const PRODUCTS: Product[] = productsData as Product[];

// Resources are now loaded server-side to avoid fs module issues in client components
// Use getResources() function in server components instead
export async function getResources(): Promise<Resource[]> {
  // Dynamic import to ensure this only runs server-side
  const { getBlogs } = await import('@/lib/blogs');
  return getBlogs().map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    category: blog.category as Resource['category'],
    title: blog.title,
    date: blog.date,
    readTime: blog.readTime,
    summary: blog.summary,
  }));
}

// Legacy export for backwards compatibility (will be empty array in client)
// Use getResources() in server components instead
export const RESOURCES: Resource[] = [];