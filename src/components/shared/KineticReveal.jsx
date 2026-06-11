import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const KineticReveal = ({ children, className = '' }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity, rotateX, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default KineticReveal;
