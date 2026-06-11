import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';
import ZeroGElement from '../shared/ZeroGElement';

const Initiatives = () => {
  return (
    <section className="py-section-gap-desktop px-margin-page max-w-container-max mx-auto relative z-10" id="initiatives">
      <RevealOnScroll className="mb-16 text-center">
        <h2 className="font-display-lg text-display-lg mb-4">Ongoing Initiatives</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Driving large-scale grassroot level impact through targeted offline and hybrid career guidance programs.
        </p>
      </RevealOnScroll>

      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Card Content */}
        <div className="md:col-span-7">
          <RevealOnScroll>
            <span className="font-label-mono text-label-mono text-primary bg-primary/10 px-4 py-1 rounded-full mb-6 inline-block uppercase tracking-wider">
              State-Wide Program
            </span>
            <h3 className="font-headline-lg text-headline-lg mb-6 leading-tight">
              Telangana Career Guidance Initiative
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              In parallel to our digital ecosystem, a large-scale career guidance and student counselling program is currently being implemented across Telangana. Through direct school outreach, career awareness workshops, and one-on-one counselling support, we are empowering school students to navigate their future.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              We focus on students from <strong>Classes 8–10</strong>, helping them lay a strong foundation and make well-informed decisions about their academic streams and long-term career journeys.
            </p>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 glass-card rounded-2xl">
                <div className="font-headline-lg text-headline-lg text-primary mb-1">50+</div>
                <p className="text-xs font-label-mono text-on-surface-variant uppercase">Counsellors</p>
              </div>
              <div className="p-4 glass-card rounded-2xl">
                <div className="font-headline-lg text-headline-lg text-secondary mb-1">8–10</div>
                <p className="text-xs font-label-mono text-on-surface-variant uppercase">Target Classes</p>
              </div>
              <div className="p-4 glass-card rounded-2xl">
                <div className="font-headline-lg text-headline-lg text-primary mb-1">1on1</div>
                <p className="text-xs font-label-mono text-on-surface-variant uppercase">Support</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Visual Showcase Card */}
        <div className="md:col-span-5 relative">
          <RevealOnScroll style={{ animationDelay: '0.2s' }}>
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-3xl">campaign</span>
                </div>
                
                <h4 className="font-headline-md text-headline-md">Key Features of the Drive</h4>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">school</span>
                    <span className="font-body-md text-on-surface-variant">School Outreach Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">groups</span>
                    <span className="font-body-md text-on-surface-variant">Career Awareness Workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">diversity_1</span>
                    <span className="font-body-md text-on-surface-variant">Personalized 1:1 Guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">trending_up</span>
                    <span className="font-body-md text-on-surface-variant">Measurable Student Impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
          <ZeroGElement speed={0.12} className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 blur-2xl rounded-full z-[-1]" driftDuration="15s" />
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
