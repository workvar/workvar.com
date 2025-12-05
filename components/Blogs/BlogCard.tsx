import { BookOpen } from 'lucide-react';
import { Resource } from '@/types';
import Link from 'next/link';

interface ResourceCardProps {
  resource: Resource;
}

function getSlugFromId(id: string): string {
  const resourceMap: Record<string, string> = {
    '1': 'the-myth-of-multitasking',
    '2': 'building-your-local-garden',
    '3': 'reclaiming-the-attention-economy',
  };
  return resourceMap[id] || id;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const slug = getSlugFromId(resource.id);

  return (
    <Link href={`/blogs/${slug}`} className="flex flex-col h-full group cursor-pointer">
      <div className="bg-stone-50 p-8 rounded-tr-[3rem] rounded-bl-[3rem] mb-6 border border-stone-100 group-hover:bg-forest-50/50 transition-colors duration-500 min-h-[200px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="font-serif italic text-stone-400 text-sm">
            Ref. 00{resource.id}
          </span>
          <BookOpen
            size={20}
            className="text-stone-300 group-hover:text-forest-400 transition-colors"
          />
        </div>
        <div className="font-serif text-2xl text-stone-900 leading-tight">
          {resource.title}
        </div>
      </div>

      <div className="px-2">
        <div className="flex items-center space-x-4 mb-3 text-xs tracking-widest uppercase text-stone-400">
          <span className="text-forest-700 font-bold">{resource.category}</span>
          <span>•</span>
          <span>{resource.readTime}</span>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
          {resource.summary}
        </p>

        <div className="text-stone-900 font-serif italic text-sm group-hover:translate-x-2 transition-transform duration-300">
          Read entry &rarr;
        </div>
      </div>
    </Link>
  );
}


