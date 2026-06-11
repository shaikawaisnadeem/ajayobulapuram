import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';
import KineticReveal from '../shared/KineticReveal';

const Ventures = () => {
  const ventures = [
    { title: 'AI Admission Assistant', desc: 'Smart chatbots and predictive modeling to answer every \'what-if\' for aspirants.' },
    { title: 'College Predictor', desc: 'Highly accurate rank-to-college matching based on years of historical cut-off data.' },
    { title: 'Medical Explorer', desc: 'Virtual tours, alumni reviews, and fee structures for over 1000+ institutions.' },
    { title: 'Counseling Platform', desc: 'End-to-end management of the counseling process with expert human-in-the-loop.' },
  ];

  return (
    <section className="py-section-gap-desktop px-margin-page relative z-10" id="ventures">
      <div className="max-w-container-max mx-auto">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display-lg text-display-lg mb-4">The drstudents Ecosystem</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Intelligent tools designed to make the medical admission journey predictable and stress-free.</p>
          </div>
          <button className="mb-2 text-primary font-bold flex items-center gap-2 group">
            View All Products <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <KineticReveal className="p-8 glass-card rounded-3xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">AI Admission Assistant</h3>
            <p className="text-on-surface-variant text-body-md mb-8 flex-grow">Smart chatbots and predictive modeling to answer every 'what-if' for aspirants.</p>
            <div className="pt-6 border-t border-white/5">
              <span className="font-label-mono text-label-mono text-secondary">LIVE NOW</span>
            </div>
          </KineticReveal>

          {/* Product Card 2 */}
          <KineticReveal className="p-8 glass-card rounded-3xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">College Predictor</h3>
            <p className="text-on-surface-variant text-body-md mb-8 flex-grow">Highly accurate rank-to-college matching based on years of historical cut-off data.</p>
            <div className="pt-6 border-t border-white/5">
              <span className="font-label-mono text-label-mono text-secondary">DATA DRIVEN</span>
            </div>
          </KineticReveal>

          {/* Product Card 3 */}
          <KineticReveal className="p-8 glass-card rounded-3xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Medical Explorer</h3>
            <p className="text-on-surface-variant text-body-md mb-8 flex-grow">Virtual tours, alumni reviews, and fee structures for over 1000+ institutions.</p>
            <div className="pt-6 border-t border-white/5">
              <span className="font-label-mono text-label-mono text-secondary">VIRTUAL</span>
            </div>
          </KineticReveal>

          {/* Product Card 4 */}
          <KineticReveal className="p-8 glass-card rounded-3xl flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Counseling Platform</h3>
            <p className="text-on-surface-variant text-body-md mb-8 flex-grow">End-to-end management of the counseling process with expert human-in-the-loop.</p>
            <div className="pt-6 border-t border-white/5">
              <span className="font-label-mono text-label-mono text-secondary">HYBRID</span>
            </div>
          </KineticReveal>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
