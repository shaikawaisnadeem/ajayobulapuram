import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';
import ZeroGElement from '../shared/ZeroGElement';

const Contact = () => {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-page relative overflow-hidden z-10" id="contact">
      <ZeroGElement speed={0.05} className="absolute -bottom-20 -left-20 z-0" driftDuration="25s">
        <div className="w-96 h-96 bg-primary/10 blur-[150px] rounded-full"></div>
      </ZeroGElement>
      <RevealOnScroll className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display-lg text-display-lg mb-6">Let's Build Something Meaningful</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Whether you're a potential partner, a student in need, or someone passionate about EdTech—I'm always open to a conversation.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-3 px-8 py-4 glass-card rounded-2xl hover:text-primary transition-all">
            <span className="material-symbols-outlined">mail</span> Email Me
          </button>
          <button className="flex items-center gap-3 px-8 py-4 glass-card rounded-2xl hover:text-primary transition-all">
            <span className="material-symbols-outlined">link</span> LinkedIn
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">calendar_today</span> Schedule Meeting
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
