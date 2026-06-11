import React, { useEffect, useRef } from 'react';

const ParallaxElement = ({ children, className = '', speed = 0.15, style = {} }) => {
  const ref = useRef(null);

  useEffect(() => {
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
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default ParallaxElement;
