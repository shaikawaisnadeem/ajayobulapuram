import React from 'react';
import ParallaxElement from './ParallaxElement';

const ZeroGElement = ({ children, className = '', speed = 0.15, style = {}, driftDuration = '15s', delay = '0s' }) => {
  return (
    <ParallaxElement speed={speed} className={className} style={style}>
      <div 
        className="zero-g-animation w-full h-full" 
        style={{ 
          animationDuration: driftDuration,
          animationDelay: delay
        }}
      >
        {children}
      </div>
    </ParallaxElement>
  );
};

export default ZeroGElement;
