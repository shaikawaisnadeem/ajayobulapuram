import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';
import ZeroGElement from '../shared/ZeroGElement';

const Mission = () => {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-page max-w-container-max mx-auto relative z-10" id="mission">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <RevealOnScroll>
          <h2 className="font-headline-lg text-headline-lg mb-8">The Mission Behind the Movement</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">drstudents wasn't built in a boardroom; it was born from the struggle of thousands of NEET aspirants facing a fragmented, opaque admission system.</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            Our focus is singular: simplifying the journey from aspirant to medical professional by providing data-backed tools and expert counseling that replaces anxiety with certainty.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 glass-card rounded-2xl">
              <div className="font-display-lg text-display-lg text-primary mb-2">1000+</div>
              <p className="font-label-mono text-label-mono uppercase text-on-surface-variant">Medical Colleges</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <div className="font-display-lg text-display-lg text-secondary mb-2">50k+</div>
              <p className="font-label-mono text-label-mono uppercase text-on-surface-variant">Students Guided</p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="relative" style={{ animationDelay: '0.3s' }}>
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
            <img
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="A cinematic, high-key shot of a modern medical research lab with blue accent lighting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBMyn6vI9HcJSXk5cVnSIXMjarXTm0Nax2sRHLjCRP9tkWv13slL9cKL70KWwZ1mN45086j21Sf0LC7VfgV8xrwTu4djiZHgtfFWMl6uXMh85bt6bkH3BGeRpbcjIp1nIFjP8EURY0qHGej1iQ4E_HXmLBhAAM-gvw1vcoMYCJU3osAuO0BUcDJ0-KywTu3NCAHn7DC3wxB3ikjtI3YmRY79bznhGTYHDhGLPjNLb7dLvxo21LeCqa6kzgN9hrlKV0a_c18_UXWTw"
            />
          </div>
          <ZeroGElement speed={0.15} className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full z-[-1]" driftDuration="18s" delay="0s" />
          <ZeroGElement speed={-0.1} className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full z-[-1]" driftDuration="22s" delay="-5s" />
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Mission;
