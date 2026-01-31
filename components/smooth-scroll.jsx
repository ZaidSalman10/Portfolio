'use client';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.12,        // Slightly faster response
        duration: 1,       // Reduced from 1.5 to 1 (Snappier)
        smoothWheel: true,
        syncTouch: true,   // Helps mobile lag
      }}
    >
      {children}
    </ReactLenis>
  );
}