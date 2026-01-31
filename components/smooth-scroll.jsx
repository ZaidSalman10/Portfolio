'use client';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,          // smoother, fluid interpolation
        duration: 1.2,       // natural momentum (not floaty)
        smoothWheel: true,   // buttery mouse wheel
        smoothTouch: false,  // avoid mobile lag
        syncTouch: true,     // natural touch tracking
        touchMultiplier: 1.5
      }}
    >
      {children}
    </ReactLenis>
  );
}