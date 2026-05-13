import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: ReactNode;
  animate?: boolean;
  delay?: number;
}

export function AnimatedHeading({
  as: Component = 'h2',
  className,
  children,
  animate = true,
  delay = 0
}: AnimatedHeadingProps) {
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const MotionComponent = animate ? motion[Component] : Component;

  return (
    <MotionComponent
      className={cn(
        'display-font text-balance',
        Component === 'h1' && 'text-4xl md:text-6xl lg:text-7xl',
        Component === 'h2' && 'text-3xl md:text-4xl lg:text-5xl',
        Component === 'h3' && 'text-2xl md:text-3xl lg:text-4xl',
        Component === 'h4' && 'text-xl md:text-2xl lg:text-3xl',
        Component === 'h5' && 'text-lg md:text-xl lg:text-2xl',
        Component === 'h6' && 'text-base md:text-lg lg:text-xl',
        className
      )}
      {...(animate && {
        variants: headingVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: 'easeOut' }
      })}
    >
      {children}
    </MotionComponent>
  );
}