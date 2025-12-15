'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Leaf } from 'lucide-react';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const rippleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leafRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [leaves, setLeaves] = React.useState<
    {
      id: number;
      left: string;
      delay: number;
      duration: number;
      scale: number;
      rotateStart: number;
    }[]
  >([]);

  // Generate leaf positions only on the client after mount to avoid
  // non-deterministic Math.random() during server-side rendering.
  React.useEffect(() => {
    const generatedLeaves = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 90}%`,
      delay: Math.random() * 5,
      duration: 18 + Math.random() * 10,
      scale: 0.6 + Math.random() * 0.4,
      rotateStart: Math.random() * 360,
    }));

    setLeaves(generatedLeaves);
  }, []);

  useGSAP(() => {
    // Breathing gradient animation
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        scale: 1.1,
        opacity: 0.5,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }

    // Ripple animations
    rippleRefs.current.forEach((ripple, i) => {
      if (ripple) {
        gsap.fromTo(
          ripple,
          { scale: 0.8, opacity: 0.4 },
          {
            scale: 2.5,
            opacity: 0,
            duration: 8,
            repeat: -1,
            delay: i * 2.6,
            ease: 'none',
          }
        );
      }
    });

    // Leaf animations
    leafRefs.current.forEach((leafEl, i) => {
      if (leafEl && leaves[i]) {
        const leaf = leaves[i];
        // Use keyframes for complex animations
        const leafTimeline = gsap.timeline({ repeat: -1, delay: leaf.delay });
        leafTimeline
          .fromTo(
            leafEl,
            {
              y: -100,
              x: 0,
              opacity: 0,
              rotation: leaf.rotateStart,
            },
            {
              y: '100vh',
              x: 0,
              opacity: 0.8,
              rotation: leaf.rotateStart + 40,
              duration: leaf.duration / 3,
              ease: 'none',
            }
          )
          .to(leafEl, {
            x: 40,
            rotation: leaf.rotateStart + 80,
            duration: leaf.duration / 3,
            ease: 'none',
          })
          .to(leafEl, {
            x: -40,
            rotation: leaf.rotateStart + 100,
            duration: leaf.duration / 3,
            ease: 'none',
          })
          .to(leafEl, {
            x: 0,
            opacity: 0,
            rotation: leaf.rotateStart + 120,
            duration: leaf.duration / 3,
            ease: 'none',
          });
      }
    });
  }, { dependencies: [leaves] });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10"
    >
      <div
        ref={gradientRef}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] bg-gradient-to-b from-forest-50 to-transparent rounded-full blur-3xl"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center overflow-hidden">
        {[0, 1, 2].map((i) => (
          <div
            key={`ripple-${i}`}
            ref={(el) => {
              rippleRefs.current[i] = el;
            }}
            className="absolute rounded-full border border-forest-100/50"
            style={{ width: '40vmin', height: '40vmin' }}
          />
        ))}
      </div>

      {leaves.map((leaf, i) => (
        <div
          key={leaf.id}
          ref={(el) => {
            leafRefs.current[i] = el;
          }}
          style={{
            left: leaf.left,
            position: 'absolute',
            scale: leaf.scale,
          }}
        >
          <Leaf
            className="text-forest-300 fill-forest-100/40"
            size={24}
            strokeWidth={1}
          />
        </div>
      ))}
    </div>
  );
}


