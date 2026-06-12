import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
      );
    };

    const checkMobile = () => {
      return window.innerWidth < 768;
    };

    setIsTouchDevice(checkTouch());
    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // We recommend low performance fallback (static/CSS elements instead of heavy 3D canvases) 
  // on any touch/mobile devices to conserve battery and avoid lags.
  const useLowPerformanceFallback = isTouchDevice || isMobile;

  return {
    isTouchDevice,
    isMobile,
    useLowPerformanceFallback,
  };
};
