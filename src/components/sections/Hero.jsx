import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../shared/RevealOnScroll';
import ZeroGElement from '../shared/ZeroGElement';

const Hero = () => {
  return (
    <header className="relative min-h-0 md:min-h-screen flex items-start md:items-center justify-center pt-32 md:pt-24 pb-16 md:pb-0 overflow-hidden px-6 md:px-margin-page z-10">
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-container-max mx-auto items-center w-full">
        <RevealOnScroll>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="font-label-mono text-label-mono text-primary px-3 py-1 border border-primary/30 rounded-full">Founder</span>
            <span className="font-label-mono text-label-mono text-primary px-3 py-1 border border-primary/30 rounded-full">Entrepreneur</span>
            <span className="font-label-mono text-label-mono text-primary px-3 py-1 border border-primary/30 rounded-full">Education Innovator</span>
          </div>
          <motion.h1 
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.8 } }
            }}
            initial="hidden"
            animate="show"
            className="text-[clamp(32px,7.5vw,110px)] font-bold mb-6 leading-[0.9] tracking-tighter uppercase flex flex-col md:flex-row md:flex-wrap perspective-[1000px] w-full"
          >
            {"AJAY OBULAPURAM".split(' ').map((word, wordIdx) => (
              <div key={wordIdx} className="flex mr-3 sm:mr-4 md:mr-6 pb-2 md:pb-4 whitespace-nowrap">
                {word.split('').map((char, charIdx) => (
                  <span key={charIdx} className="overflow-hidden inline-flex">
                    <motion.span 
                      variants={{
                        hidden: { y: '100%', opacity: 0, rotateX: -90 },
                        show: { y: '0%', opacity: 1, rotateX: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
                      }}
                      className="inline-block origin-bottom"
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </div>
            ))}
          </motion.h1>
          <h2 className="font-headline-md text-headline-md text-secondary mb-6">Founder & CEO of drstudents</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10">Pioneering India's student-first ecosystem by simplifying medical admissions through technology-driven clarity and unwavering support.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://drstudents.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 border border-outline text-on-surface rounded-xl font-bold hover:bg-white/5 transition-all inline-flex items-center justify-center text-center">Explore drstudents</a>
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:shadow-[0_0_40px_rgba(192,193,255,0.2)] transition-all">View Journey</button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="hidden md:block relative h-[500px]" style={{ animationDelay: '0.2s' }}>
          <ZeroGElement speed={-0.1} className="absolute -bottom-4 -right-4 z-20" driftDuration="12s">
            <div className="p-6 glass-card rounded-2xl max-w-xs">
              <p className="font-label-mono text-label-mono text-secondary mb-2 uppercase tracking-widest">Live Mission</p>
              <p className="font-body-md text-body-md text-on-surface">Democratizing access to high-tier medical education for every aspirant in India.</p>
            </div>
          </ZeroGElement>
        </RevealOnScroll>
      </div>
    </header>
  );
};

export default Hero;
