import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-4xl rounded-full bg-surface/10 dark:bg-surface/10 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] flex justify-between items-center px-8 py-3 z-50">
      <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">Ajay Obulapuram</div>
      <div className="hidden md:flex gap-8 font-body-md text-body-md">
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#journey">Journey</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#ventures">Ventures</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#students">Students</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#vision">Vision</a>
      </div>
      <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold scale-95 active:scale-90 transition-transform">Connect</button>
    </nav>
  );
};

export default Navbar;
