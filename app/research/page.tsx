import Link from 'next/link';
import Section from '@/components/general/Section';
import Button from '@/components/general/Button';
import ResearchFinding from '@/components/Research/ResearchFinding';
import { Clock, Brain, Zap } from 'lucide-react';

export default function Research() {
  return (
    <>
      <Section background="sand" className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-serif text-stone-400 italic text-xl mb-4 block">
            The Evidence
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight">
            The Weight of <br />
            <span className="text-forest-800">The Invisible Noise.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light font-serif">
            We did not guess that the mind needed silence. We looked at the
            data. Here is what the science says about the cluttered mind.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-5xl mx-auto space-y-24">
          <ResearchFinding
            icon={Clock}
            exhibit="Exhibit A: Interruption"
            title="The 23-Minute Cost."
            quote={
              <>
                &quot;It takes an average of{' '}
                <span className="text-stone-900 font-medium bg-forest-100/50 px-1">
                  23 minutes and 15 seconds
                </span>{' '}
                to get back on task after being interrupted.&quot;
              </>
            }
            explanation="When you switch context to check a notification, your brain doesn't just switch back instantly. It leaves 'attention residue' on the previous task. This fragmentation effectively lowers your functional IQ by up to 10 points—more than losing a night of sleep."
            source="Source: Gloria Mark, University of California, Irvine"
          />

          <ResearchFinding
            icon={Brain}
            exhibit="Exhibit B: Cognitive Drain"
            title="The Mere Presence."
            quote="The mere presence of your smartphone reduces brain power, even if it is turned off and face down."
            explanation="Research indicates that when your phone is visible, a part of your brain is actively working to inhibit the impulse to check it. This 'brain drain' reduces your available cognitive capacity for deep work and problem solving."
            source="Source: Journal of the Association for Consumer Research"
          />

          <ResearchFinding
            icon={Zap}
            exhibit="Exhibit C: The Cure"
            title="Attention Restoration."
            quote="Digital detox leads to lower anxiety, better sleep, and a significant return of focus capacity."
            explanation="Just as nature restores the body, silence restores the mind. Attention Restoration Theory (ART) suggests that separating oneself from the 'directed attention' fatigue of screens allows the brain's executive functions to recharge."
            source="Source: Kaplan, S. (1995). The restorative benefits of nature."
          />
        </div>
      </Section>

      <Section background="gray" className="py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            The science is clear. <br /> The choice is yours.
          </h2>
          <p className="text-stone-500 mb-10 font-light font-serif text-lg">
            You can continue to pay the cognitive tax, or you can reclaim your
            mind.
          </p>
          <Link href="/products">
            <Button variant="primary" size="lg">
              Explore the Solutions
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}


