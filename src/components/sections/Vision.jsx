import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';
import VisionCore3D from './VisionCore3D';

const Vision = () => {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-page relative z-10" id="vision">
      <RevealOnScroll className="max-w-4xl mx-auto text-center">
        <h2 className="font-display-lg text-display-lg mb-12 leading-tight">
          Building The Future Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Medical Admissions</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-16 leading-relaxed">
          The future is not just about getting a seat; it's about the right fit. We are integrating behavioral AI to help students discover specializations early, while expanding our ecosystem to cover the entire lifecycle of a medical student—from admission to residency.
        </p>
        <div className="aspect-video rounded-3xl overflow-hidden glass-card relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60 z-10 pointer-events-none"></div>
          <VisionCore3D />
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform pointer-events-auto">
              <span className="material-symbols-outlined text-4xl text-white">play_arrow</span>
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Vision;
