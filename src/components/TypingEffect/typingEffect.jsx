import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function TypingEffect({ text = 'Typing Effect' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2
      ref={ref}
      className="text-sm font-medium text-gray-400 tracking-tighter md:leading-[4rem]"
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.1, delay: index * 0.03 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
