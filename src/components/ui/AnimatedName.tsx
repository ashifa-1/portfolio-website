import { motion } from 'framer-motion';

interface AnimatedNameProps {
  text: string;
  delay?: number;
}

export function AnimatedName({
  text,
  delay = 0,
}: AnimatedNameProps) {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.04,
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}