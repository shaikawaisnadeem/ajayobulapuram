import React, { useEffect, useRef } from 'react';
import { usePerformance } from '../../hooks/usePerformance';

const ParallaxElement = ({ children, className = '', speed = 0.15, style = {} }) => {
  const ref = useRef(null);
  const { useLowPerformanceFallback } = usePerformance();

  useEffect(() => {
    if (useLowPerformanceFallback) {
      // Clear any style transforms when falling back
      if (ref.current) {
        ref.current.style.transform = '';
      }
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const centerOffset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
            const val = centerOffset * -speed; 
            ref.current.style.transform = `translateY(${val}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, useLowPerformanceFallback]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: useLowPerformanceFallback ? 'auto' : 'transform' }}>
      {children}
    </div>
  );
};

export default ParallaxElement;

