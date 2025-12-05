import {General, BlogsPage} from '@/components';
import { RESOURCES } from '@/constants';


export default function Resources() {
  return (
    <>
      <General.SectionComponent background="sand" className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-forest-800 mx-auto mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-stone-900">
            The Library
          </h1>
          <p className="text-xl text-stone-500 font-light font-serif italic">
            Scrolls of wisdom, technical tomes, and maps for the journey.
          </p>
        </div>
      </General.SectionComponent>

      <General.SectionComponent background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {RESOURCES.map((resource, index) => (
            <BlogsPage.BlogCardComponent key={index} resource={resource} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-stone-400 font-serif italic mb-6">
            The archives are constantly expanding.
          </p>
          <BlogsPage.NewsletterSubscription />
        </div>
      </General.SectionComponent>
    </>
  );
}


