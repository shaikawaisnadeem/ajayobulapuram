import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';

const Journey = () => {
  return (
    <section className="py-section-gap-desktop bg-surface-container-lowest relative z-10" id="journey">
      <div className="max-w-container-max mx-auto px-margin-page">
        <RevealOnScroll className="text-center mb-24">
          <h2 className="font-display-lg text-display-lg mb-4">Evolution of a Vision</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">The path from identifying the gap to bridging it for an entire nation.</p>
        </RevealOnScroll>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px timeline-line"></div>
          
          {/* Timeline Items */}
          <div className="space-y-32">
            {/* Item 1 */}
            <RevealOnScroll className="relative flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_20px_rgba(192,193,255,0.8)] z-10"></div>
              <div className="grid md:grid-cols-2 w-full gap-20">
                <div className="text-right pr-12 hidden md:block">
                  <span className="font-label-mono text-label-mono text-primary bg-primary/10 px-4 py-1 rounded-full">2018</span>
                </div>
                <div className="md:pl-12 pl-8">
                  <h3 className="font-headline-md text-headline-md mb-2">Student Discovery</h3>
                  <p className="text-on-surface-variant font-body-md">Witnessing the chaotic reality of medical admissions firsthand and realizing that merit wasn't the only hurdle; information was.</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Item 2 */}
            <RevealOnScroll className="relative flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20 z-10"></div>
              <div className="grid md:grid-cols-2 w-full gap-20">
                <div className="md:text-right md:pr-12 pl-8 md:pl-0 order-2 md:order-1">
                  <h3 className="font-headline-md text-headline-md mb-2">Building DR Students</h3>
                  <p className="text-on-surface-variant font-body-md">Laying the foundation of a community-driven platform that puts the student's needs above institutional marketing.</p>
                </div>
                <div className="pl-12 hidden md:block order-1 md:order-2">
                  <span className="font-label-mono text-label-mono text-secondary bg-secondary/10 px-4 py-1 rounded-full">2020</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Item 3 */}
            <RevealOnScroll className="relative flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
              <div className="grid md:grid-cols-2 w-full gap-20">
                <div className="text-right pr-12 hidden md:block">
                  <span className="font-label-mono text-label-mono text-primary bg-primary/10 px-4 py-1 rounded-full">2022</span>
                </div>
                <div className="md:pl-12 pl-8">
                  <h3 className="font-headline-md text-headline-md mb-2">Scaling the Platform</h3>
                  <p className="text-on-surface-variant font-body-md">Transitioning from manual guidance to automated, AI-assisted tools that could serve thousands of students simultaneously.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
