import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full rounded-none border-t border-outline-variant/30 bg-surface dark:bg-surface flex flex-col gap-gutter px-margin-page py-section-gap-desktop max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="font-display-lg text-display-lg font-bold text-on-surface">Ajay Obulapuram</div>
        <div className="flex gap-8">
          <a className="text-on-surface-variant font-body-lg hover:text-secondary hover:translate-x-1 transition-all duration-300" href="#">LinkedIn</a>
          <a className="text-on-surface-variant font-body-lg hover:text-secondary hover:translate-x-1 transition-all duration-300" href="#">Twitter</a>
          <a className="text-on-surface-variant font-body-lg hover:text-secondary hover:translate-x-1 transition-all duration-300" href="#">Email</a>
          <a className="text-on-surface-variant font-body-lg hover:text-secondary hover:translate-x-1 transition-all duration-300" href="#">Manifesto</a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant/60 font-body-md">
        <p>© 2024 Ajay Obulapuram. Precision engineered for impact.</p>
        <p className="font-label-mono text-xs uppercase tracking-widest">Designed for Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;
