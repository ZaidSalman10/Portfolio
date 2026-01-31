'use client';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
        syncTouch: true,
        touchMultiplier: 1.1
      }}
    >
      {children}
    </ReactLenis>
  );
}