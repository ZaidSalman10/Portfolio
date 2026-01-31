'use client';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,          // slightly slower easing, silkier
        duration: 2.3,       // cinematic glide (safe limit)
        smoothWheel: true,   // buttery desktop scroll
        smoothTouch: false,  // native mobile = no lag
        syncTouch: true,     // natural finger tracking
        touchMultiplier: 0.9 // calmer, refined mobile pace
      }}
    >
      {children}
    </ReactLenis>
  );
}