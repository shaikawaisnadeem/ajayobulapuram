import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Journey', href: '#journey' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Students', href: '#students' },
    { label: 'Vision', href: '#vision' },
  ];

  return (
    <>
      <nav className="fixed top-6 inset-x-6 md:left-1/2 md:right-auto md:-translate-x-1/2 w-auto md:w-[calc(100%-48px)] max-w-4xl rounded-full bg-surface/30 dark:bg-surface/30 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] flex justify-between items-center px-6 md:px-8 py-3.5 z-50 transition-all duration-300">
        <div className="font-headline-md text-[18px] md:text-[22px] font-bold text-on-surface tracking-tighter whitespace-nowrap">
          Ajay Obulapuram
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-body-md text-body-md">
          {menuItems.map((item) => (
            <a
              key={item.label}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Connect Button */}
        <button className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold scale-95 hover:scale-100 active:scale-95 transition-all">
          Connect
        </button>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center focus:outline-none relative z-50 active:scale-90 transition-transform"
          aria-label="Toggle menu"
        >
          {/* Animated Hamburger Icon */}
          <div className="flex flex-col gap-1.5 justify-center items-center w-4 h-4">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-[1.5px] bg-on-surface rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-4 h-[1.5px] bg-on-surface rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-[1.5px] bg-on-surface rounded-full"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-24 inset-x-6 md:left-1/2 md:right-auto md:-translate-x-1/2 w-auto md:w-[calc(100%-48px)] max-w-4xl rounded-3xl bg-surface/90 dark:bg-surface/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 z-40 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-on-surface-variant font-medium text-lg hover:text-primary transition-colors py-2 border-b border-white/5"
                  href={item.href}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-on-primary py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              Connect
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

