import React, { useEffect, useState } from 'react';
import { usePerformance } from '../../hooks/usePerformance';

const CursorGlow = () => {
  const { isTouchDevice } = usePerformance();
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle 600px at ${position.x} ${position.y}, rgba(192, 193, 255, 0.1), transparent 80%)`
      }}
    />
  );
};

export default CursorGlow;

