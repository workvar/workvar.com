import React from 'react';
import Section from '../components/general/Section';
import { Brain, Clock, Zap, FileText } from 'lucide-react';
import Button from '../components/general/Button';
import Link from 'next/link';

const Research: React.FC = () => {
  return (
    <>
      <Section background="sand" className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-serif text-stone-400 italic text-xl mb-4 block">The Evidence</span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight">
            The Weight of <br />
            <span className="text-forest-800">The Invisible Noise.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light font-serif">
            We did not guess that the mind needed silence. We looked at the data. 
            Here is what the science says about the cluttered mind.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Finding 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="flex items-center text-forest-800 mb-4">
                <Clock className="w-6 h-6 mr-3" />
                <span className="font-bold tracking-widest uppercase text-xs">Exhibit A: Interruption</span>
              </div>
              <h2 className="text-4xl font-serif text-stone-900 leading-none">The 23-Minute Cost.</h2>
            </div>
            <div className="md:col-span-8 bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm">
              <p className="text-xl text-stone-600 font-serif leading-relaxed mb-6">
                &quot;It takes an average of <span className="text-stone-900 font-medium bg-forest-100/50 px-1">23 minutes and 15 seconds</span> to get back on task after being interrupted.&quot;
              </p>
              <div className="text-stone-500 text-sm font-sans mb-8 leading-relaxed">
                When you switch context to check a notification, your brain doesn&apos;t just switch back instantly. It leaves &quot;attention residue&quot; on the previous task. This fragmentation effectively lowers your functional IQ by up to 10 points—more than losing a night of sleep.
              </div>
              <div className="flex items-center text-xs text-stone-400 font-serif italic border-t border-stone-200 pt-4">
                <FileText size={14} className="mr-2" />
                Source: Gloria Mark, University of California, Irvine
              </div>
            </div>
          </div>

          {/* Finding 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="flex items-center text-forest-800 mb-4">
                <Brain className="w-6 h-6 mr-3" />
                <span className="font-bold tracking-widest uppercase text-xs">Exhibit B: Cognitive Drain</span>
              </div>
              <h2 className="text-4xl font-serif text-stone-900 leading-none">The Mere Presence.</h2>
            </div>
            <div className="md:col-span-8 bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm">
              <p className="text-xl text-stone-600 font-serif leading-relaxed mb-6">
                &quot;The mere presence of your smartphone reduces brain power, even if it is turned off and face down.&quot;
              </p>
              <div className="text-stone-500 text-sm font-sans mb-8 leading-relaxed">
                Research indicates that when your phone is visible, a part of your brain is actively working to inhibit the impulse to check it. This &quot;brain drain&quot; reduces your available cognitive capacity for deep work and problem solving.
              </div>
              <div className="flex items-center text-xs text-stone-400 font-serif italic border-t border-stone-200 pt-4">
                <FileText size={14} className="mr-2" />
                Source: Journal of the Association for Consumer Research
              </div>
            </div>
          </div>

          {/* Finding 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="flex items-center text-forest-800 mb-4">
                <Zap className="w-6 h-6 mr-3" />
                <span className="font-bold tracking-widest uppercase text-xs">Exhibit C: The Cure</span>
              </div>
              <h2 className="text-4xl font-serif text-stone-900 leading-none">Attention Restoration.</h2>
            </div>
            <div className="md:col-span-8 bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm">
              <p className="text-xl text-stone-600 font-serif leading-relaxed mb-6">
                &quot;Digital detox leads to lower anxiety, better sleep, and a significant return of focus capacity.&quot;
              </p>
              <div className="text-stone-500 text-sm font-sans mb-8 leading-relaxed">
                Just as nature restores the body, silence restores the mind. Attention Restoration Theory (ART) suggests that separating oneself from the &apos;directed attention&apos; fatigue of screens allows the brain&apos;s executive functions to recharge.
              </div>
              <div className="flex items-center text-xs text-stone-400 font-serif italic border-t border-stone-200 pt-4">
                <FileText size={14} className="mr-2" />
                Source: Kaplan, S. (1995). The restorative benefits of nature.
              </div>
            </div>
          </div>

        </div>
      </Section>

      <Section background="gray" className="py-24 text-center">
         <div className="max-w-2xl mx-auto">
           <h2 className="text-3xl font-serif text-stone-900 mb-6">The science is clear. <br/> The choice is yours.</h2>
           <p className="text-stone-500 mb-10 font-light font-serif text-lg">
             You can continue to pay the cognitive tax, or you can reclaim your mind.
           </p>
           <Link href="/products">
             <Button variant="primary" size="lg">Explore the Solutions</Button>
           </Link>
         </div>
      </Section>
    </>
  );
};

export default Research;