import { FileText } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ResearchFindingProps {
  icon: LucideIcon;
  exhibit: string;
  title: string;
  quote: string | ReactNode;
  explanation: string;
  source: string;
}

export default function ResearchFinding({
  icon: Icon,
  exhibit,
  title,
  quote,
  explanation,
  source,
}: ResearchFindingProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-4 sticky top-32">
        <div className="flex items-center text-forest-800 mb-4">
          <Icon className="w-6 h-6 mr-3" />
          <span className="font-bold tracking-widest uppercase text-xs">
            {exhibit}
          </span>
        </div>
        <h2 className="text-4xl font-serif text-stone-900 leading-none">
          {title}
        </h2>
      </div>
      <div className="md:col-span-8 bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm">
        <p className="text-xl text-stone-600 font-serif leading-relaxed mb-6">
          {quote}
        </p>
        <div className="text-stone-500 text-sm font-sans mb-8 leading-relaxed">
          {explanation}
        </div>
        <div className="flex items-center text-xs text-stone-400 font-serif italic border-t border-stone-200 pt-4">
          <FileText size={14} className="mr-2" />
          {source}
        </div>
      </div>
    </div>
  );
}

