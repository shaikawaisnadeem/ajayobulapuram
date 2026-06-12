import React from 'react';

const LiquidMetalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-20] bg-surface pointer-events-none overflow-hidden">
      {/* Clean, high-performance, GPU-accelerated CSS animated gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary/15 blur-[120px] animate-pulse-slower" />
      </div>
    </div>
  );
};

export default LiquidMetalBackground;



