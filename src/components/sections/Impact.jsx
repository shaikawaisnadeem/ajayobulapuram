import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';

const Impact = () => {
  return (
    <section className="py-section-gap-desktop bg-surface-container-high overflow-hidden relative z-10">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-150"></div>
      <div className="max-w-container-max mx-auto px-margin-page relative z-10 text-center">
        <h2 className="font-label-mono text-label-mono text-primary uppercase tracking-[0.3em] mb-12">The Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <RevealOnScroll>
            <div className="font-display-xl text-display-xl text-on-surface mb-2">10k+</div>
            <p className="font-body-md text-on-surface-variant">Sessions Conducted</p>
          </RevealOnScroll>
          <RevealOnScroll style={{ animationDelay: '0.1s' }}>
            <div className="font-display-xl text-display-xl text-on-surface mb-2">98%</div>
            <p className="font-body-md text-on-surface-variant">Success Rate</p>
          </RevealOnScroll>
          <RevealOnScroll style={{ animationDelay: '0.2s' }}>
            <div className="font-display-xl text-display-xl text-on-surface mb-2">500+</div>
            <p className="font-body-md text-on-surface-variant">Active Experts</p>
          </RevealOnScroll>
          <RevealOnScroll style={{ animationDelay: '0.3s' }}>
            <div className="font-display-xl text-display-xl text-on-surface mb-2">300%</div>
            <p className="font-body-md text-on-surface-variant">Annual Growth</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Impact;
