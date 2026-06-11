import React from 'react';
import RevealOnScroll from '../shared/RevealOnScroll';

const Voices = () => {
  return (
    <section className="py-section-gap-desktop bg-surface-container-low relative z-10" id="students">
      <div className="max-w-container-max mx-auto px-margin-page">
        <RevealOnScroll className="font-headline-lg text-headline-lg mb-16 text-center">
          <h2>Voices of the Future Doctors</h2>
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <RevealOnScroll className="p-8 glass-card rounded-3xl" style={{ animationDelay: '0.1s' }}>
            <div className="flex gap-1 text-secondary mb-4">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface mb-8">"I was lost in the cut-off calculations. drstudents gave me the roadmap I needed to secure my dream seat."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20"></div>
              <div>
                <p className="font-bold">Rahul V.</p>
                <p className="text-xs text-on-surface-variant font-label-mono">AIIMS ASPIRANT</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Testimonial 2 */}
          <RevealOnScroll className="p-8 glass-card rounded-3xl" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-1 text-secondary mb-4">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface mb-8">"The college predictor is shockingly accurate. It saved me weeks of manual research and stress."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20"></div>
              <div>
                <p className="font-bold">Sruthi K.</p>
                <p className="text-xs text-on-surface-variant font-label-mono">MBBS STUDENT</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Testimonial 3 */}
          <RevealOnScroll className="p-8 glass-card rounded-3xl" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-1 text-secondary mb-4">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface mb-8">"Finally, a platform that doesn't feel like a sales pitch. Honest, transparent, and student-focused."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20"></div>
              <div>
                <p className="font-bold">Aman S.</p>
                <p className="text-xs text-on-surface-variant font-label-mono">NEET 2024 CANDIDATE</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Voices;
