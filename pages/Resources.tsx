import React from 'react';
import Section from '../components/general/Section';
import { RESOURCES } from '../constants';
import { BookOpen } from 'lucide-react';
import Button from '../components/general/Button';

const Resources: React.FC = () => {
  return (
    <>
      <Section background="sand" className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-forest-800 mx-auto mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-stone-900">The Library</h1>
          <p className="text-xl text-stone-500 font-light font-serif italic">Scrolls of wisdom, technical tomes, and maps for the journey.</p>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {RESOURCES.map((resource) => (
            <div key={resource.id} className="flex flex-col h-full group cursor-pointer">
              <div className="bg-stone-50 p-8 rounded-tr-[3rem] rounded-bl-[3rem] mb-6 border border-stone-100 group-hover:bg-forest-50/50 transition-colors duration-500 min-h-[200px] flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <span className="font-serif italic text-stone-400 text-sm">Ref. 00{resource.id}</span>
                    <BookOpen size={20} className="text-stone-300 group-hover:text-forest-400 transition-colors" />
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
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <p className="text-stone-400 font-serif italic mb-6">The archives are constantly expanding.</p>
           <Button variant="outline">Subscribe to the Ledger</Button>
        </div>
      </Section>
    </>
  );
};

export default Resources;