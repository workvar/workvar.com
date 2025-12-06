// Import all markdown files as raw text
import theMythOfMultitasking from '@/content/blogs/the-myth-of-multitasking.md?raw';
import buildingYourLocalGarden from '@/content/blogs/building-your-local-garden.md?raw';
import reclaimingTheAttentionEconomy from '@/content/blogs/reclaiming-the-attention-economy.md?raw';

const blogContentMap: Record<string, string> = {
  'the-myth-of-multitasking': theMythOfMultitasking,
  'building-your-local-garden': buildingYourLocalGarden,
  'reclaiming-the-attention-economy': reclaimingTheAttentionEconomy,
};

export function getBlogContent(slug: string): string | null {
  return blogContentMap[slug] || null;
}

