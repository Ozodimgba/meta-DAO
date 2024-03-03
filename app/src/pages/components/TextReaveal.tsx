import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { threshold: [0, 0.4] }); // Array of thresholds 

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.8, delay }
      });
    }
  }, [controls, isVisible, delay]);

  return (
    <motion.div ref={ref} animate={controls}> 
      {children}
    </motion.div>
  );
};

export default TextReveal;