import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'elevated' | 'minimal';
  animate?: boolean;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  children,
  variant = 'default',
  animate = false,
  hover = false,
  glow = false
}: CardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const CardComponent = animate ? motion.div : 'div';

  return (
    <CardComponent
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        variant === 'default' && 'bg-[rgb(var(--surface))] border border-[rgb(var(--border))] shadow-soft',
        variant === 'glass' && 'glass-card dark:glass-card-dark',
        variant === 'gradient' && 'gradient-primary border border-[rgba(var(--accent),0.2)]',
        variant === 'elevated' && 'bg-[rgb(var(--surface))] border border-[rgb(var(--border))] shadow-elevated',
        variant === 'minimal' && 'bg-transparent border border-[rgb(var(--border-secondary))]',
        hover && 'hover:scale-105 hover:shadow-floating',
        glow && 'glow',
        className
      )}
      {...(animate && {
        variants: cardVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
        transition: { duration: 0.5, ease: 'easeOut' }
      })}
    >
      {children}
    </CardComponent>
  );
}