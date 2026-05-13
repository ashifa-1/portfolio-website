import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassPanelProps {
  className?: string;
  children: ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
  animate?: boolean;
  rounded?: boolean;
}

export function GlassPanel({
  className,
  children,
  intensity = 'medium',
  animate = false,
  rounded = true
}: GlassPanelProps) {
  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  const PanelComponent = animate ? motion.div : 'div';

  return (
    <PanelComponent
      className={cn(
        'backdrop-blur-xl border transition-all duration-300',
        intensity === 'light' && 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)]',
        intensity === 'medium' && 'bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.15)]',
        intensity === 'heavy' && 'bg-[rgba(255,255,255,0.12)] border-[rgba(255,255,255,0.2)]',
        rounded && 'rounded-2xl',
        className
      )}
      {...(animate && {
        variants: panelVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
        transition: { duration: 0.6, ease: 'easeOut' }
      })}
    >
      {children}
    </PanelComponent>
  );
}