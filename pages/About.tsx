import React from 'react';
import Image from 'next/image';
import Section from '../components/general/Section';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Section background="sand" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <span className="font-serif text-stone-400 italic text-xl mb-6 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-12 text-stone-900 leading-tight">
            It began with <br/> 
            <span className="text-forest-800">a desire for silence.</span>
          </h1>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif text-stone-900 mb-6 sticky top-32 italic">Chapter I: The Noise</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-xl text-stone-600 leading-relaxed font-light font-serif">
            <p>
              The year was 2023. The founder sat in a small apartment, illuminated only by the blue light of a monitor. He was trying to write, but the world wouldn&apos;t let him.
            </p>
            <p>
              A notification slid onto the screen. A red dot appeared on a tab. An email arrived with &quot;urgent&quot; in the subject line. The thought he was holding slipped away, dissolving into the digital ether.
            </p>
            <p>
              He realized then that his computer, once a bicycle for the mind, had become an assembly line for his attention.
            </p>
            <div className="pl-8 border-l-2 border-forest-200 py-4 my-10">
              <p className="text-stone-800 font-medium italic text-2xl">
                &quot;We are drowning in information, while starving for wisdom.&quot;
              </p>
            </div>
            <p>
              WorkVar was born that night. Not as a company, but as a survival mechanism. A simple script to block the noise. A shield against the chaos.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray" className="py-32">
        <div className="max-w-4xl mx-auto text-center relative px-8">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-forest-100 w-32 h-32 -translate-y-16" />
          <p className="relative z-10 text-3xl md:text-5xl font-serif text-stone-800 leading-tight">
            We believe that attention is the most scarce resource of the 21st century. To protect it is an act of rebellion.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
             <div className="rounded-t-full rounded-b-[1000px] overflow-hidden aspect-[3/4] border-4 border-stone-50 shadow-2xl">
               <Image 
                 src="https://picsum.photos/seed/forest2/800/1000?grayscale" 
                 alt="The Forest" 
                 width={800}
                 height={1000}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
               />
             </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-serif text-stone-400 italic text-xl mb-4 block">Chapter II: The Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Software as a Garden</h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg font-light">
              Most software is built like a shopping mall—designed to keep you inside, distracted, and consuming.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed text-lg font-light">
              We build software like a garden. It is quiet. It grows slowly. It requires your care, but it gives back peace and sustenance. We don&apos;t track your footsteps in the garden. We don&apos;t sell tickets to your private thoughts.
            </p>
            <div className="pt-6">
               <span className="text-forest-800 font-serif text-xl italic">Welcome to the rebellion.</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;