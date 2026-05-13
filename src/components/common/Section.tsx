import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
  animate?: boolean;
}

export function Section({
  id,
  className,
  children,
  containerClassName,
  animate = true
}: SectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const SectionComponent = animate ? motion.section : 'section';

  return (
    <SectionComponent
      id={id}
      className={cn('py-16 md:py-24', className)}
      {...(animate && {
        variants: sectionVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
        transition: { duration: 0.6, ease: 'easeOut' }
      })}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </SectionComponent>
  );
}