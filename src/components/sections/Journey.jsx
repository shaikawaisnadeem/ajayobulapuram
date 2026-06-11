import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';

const Journey = () => {
  const steps = [
    {
      year: "2023",
      title: "Offline Beginnings",
      description: "Started with a vision to transform student guidance through offline initiatives.",
      color: "primary",
    },
    {
      year: "2024",
      title: "Digital Expansion",
      description: "Expanded online, providing free mentorship to 2,000+ students.",
      color: "secondary",
    },
    {
      year: "2025",
      title: "Community & Trust",
      description: "Trusted by 5,000+ students & parents across AP & Telangana, with a community of 70,000+ followers.",
      color: "primary",
    },
    {
      year: "2026",
      title: "Driving Greater Impact",
      description: "Scaling through new projects, innovation, and expanded student support programs.",
      color: "secondary",
    },
  ];

  return (
    <section className="py-section-gap-desktop bg-surface-container-lowest relative z-10" id="journey">
      <div className="max-w-container-max mx-auto px-margin-page">
        <RevealOnScroll className="text-center mb-24">
          <h2 className="font-display-lg text-display-lg mb-4">Evolution of a Vision</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">The path from identifying the gap to bridging it for an entire nation.</p>
        </RevealOnScroll>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-px timeline-line"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const glowClass = step.color === "primary" 
                ? "shadow-[0_0_20px_rgba(192,193,255,0.8)] bg-primary ring-primary/20" 
                : "shadow-[0_0_20px_rgba(255,192,203,0.8)] bg-secondary ring-secondary/20";
              
              return (
                <RevealOnScroll key={step.year} className="relative flex items-start md:items-center justify-start md:justify-center">
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-4 z-10 top-2 md:top-1/2 md:-translate-y-1/2 ${glowClass}`}></div>
                  
                  {/* Content Container */}
                  <div className="grid md:grid-cols-2 w-full gap-4 md:gap-20 pl-12 md:pl-0">
                    {/* Left Side (Desktop) / Year Badge (Mobile) */}
                    <div className={`md:text-right md:pr-12 ${isEven ? 'md:order-2 md:text-left md:pl-12' : 'md:order-1'}`}>
                      <span className={`inline-block font-label-mono text-label-mono ${step.color === 'primary' ? 'text-primary bg-primary/10' : 'text-secondary bg-secondary/10'} px-4 py-1 rounded-full mb-3 md:mb-0`}>
                        {step.year}
                      </span>
                    </div>

                    {/* Right Side (Desktop) / Main Text */}
                    <div className={`${isEven ? 'md:order-1 md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <h3 className="font-headline-md text-headline-md mb-2">{step.title}</h3>
                      <p className="text-on-surface-variant font-body-md leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
