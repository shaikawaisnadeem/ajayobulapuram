import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CinematicLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3 seconds total display duration before unmounting
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // Wait for the exit animation to finish
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const name = "AJAY OBULAPURAM";
  const subtext = "FOUNDER & CEO";

  // Framer motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(15px)',
      transition: { duration: 1.2, ease: 'easeInOut' }
    }
  };

  const item = {
    hidden: { y: '100%', opacity: 0, rotateX: -90 },
    show: { 
      y: '0%', 
      opacity: 1, 
      rotateX: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 } 
    }
  };

  const subItem = {
    hidden: { opacity: 0, letterSpacing: '0.8em', filter: 'blur(10px)' },
    show: { 
      opacity: 0.7, 
      letterSpacing: '0.4em',
      filter: 'blur(0px)',
      transition: { duration: 1.5, ease: 'easeOut' } 
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={container}
        >
          <div className="text-center font-bold uppercase text-on-surface flex flex-col items-center">
            
            <motion.div variants={subItem} className="font-label-mono text-[10px] md:text-sm text-secondary mb-8 tracking-[0.4em]">
              {subtext}
            </motion.div>

            {/* perspective-[1000px] gives the 3D unfolding text a realistic depth */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full max-w-[100vw] px-4">
              {name.split(' ').map((word, wordIdx) => (
                <div key={wordIdx} className="flex mr-3 sm:mr-4 md:mr-6 pb-2 md:pb-4 perspective-[1000px] whitespace-nowrap">
                  {word.split('').map((char, charIdx) => (
                    <span key={charIdx} className="overflow-hidden inline-flex">
                      <motion.span 
                        variants={item}
                        className="text-[clamp(32px,7.5vw,110px)] leading-[0.9] tracking-tighter inline-block origin-bottom"
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
              className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicLoader;
