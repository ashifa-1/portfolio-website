import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface InteractiveLightingProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colors?: string[];
}

export function InteractiveLighting({
  className = '',
  intensity = 'medium',
  colors = ['var(--accent)', 'var(--accent-cyan)', 'var(--accent-emerald)']
}: InteractiveLightingProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const intensityMap = {
    low: 0.03,
    medium: 0.06,
    high: 0.1
  };

  const baseIntensity = intensityMap[intensity];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      animate={{
        background: colors.map((color, index) =>
          `radial-gradient(circle ${200 + index * 100}px at ${springX}px ${springY}px,
            rgba(${color}, ${baseIntensity * (isActive ? 1.5 : 1)}) 0%,
            rgba(${color}, ${baseIntensity * 0.5 * (isActive ? 1.5 : 1)}) 40%,
            transparent 70%)`
        ).join(', ')
      }}
      transition={{ duration: 0.1 }}
    />
  );
}

// Floating Light Orbs Component
interface FloatingLightOrbsProps {
  count?: number;
  size?: 'small' | 'medium' | 'large' | 'hero';
  className?: string;
}

export function FloatingLightOrbs({
  count = 12,
  size = 'medium',
  className = ''
}: FloatingLightOrbsProps) {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 25,
    duration: Math.random() * 20 + 15,
    color: ['var(--accent)', 'var(--accent-cyan)', 'var(--accent-emerald)', 'var(--accent-rose)', 'var(--accent-amber)'][Math.floor(Math.random() * 5)],
    intensity: Math.random() * 0.3 + 0.1, // Random intensity between 0.1 and 0.4
  }));

  const sizeMap = {
    small: { width: 60, height: 60, blur: 'blur-xl' },
    medium: { width: 100, height: 100, blur: 'blur-2xl' },
    large: { width: 150, height: 150, blur: 'blur-3xl' },
    hero: { width: 200, height: 200, blur: 'blur-3xl' } // Larger for hero section
  };

  const orbSize = sizeMap[size];

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full ${orbSize.blur}`}
          style={{
            width: orbSize.width,
            height: orbSize.height,
            background: `radial-gradient(circle, rgba(${orb.color}, ${orb.intensity}) 0%, rgba(${orb.color}, ${orb.intensity * 0.6}) 40%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 500 - 250, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 500 - 250, Math.random() * 300 - 150, 0],
            scale: [1, 1.4, 0.8, 1],
            opacity: [orb.intensity * 0.5, orb.intensity, orb.intensity * 0.3, orb.intensity * 0.5],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
          initial={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        />
      ))}
    </div>
  );
}

// Dynamic Mesh Background
export function DynamicMeshBackground({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      animate={{
        background: [
          'conic-gradient(from 0deg at 50% 50%, rgba(var(--accent), 0.03) 0deg, transparent 90deg, rgba(var(--accent-cyan), 0.02) 180deg, transparent 270deg)',
          'conic-gradient(from 90deg at 30% 70%, rgba(var(--accent-emerald), 0.03) 0deg, transparent 90deg, rgba(var(--accent-rose), 0.02) 180deg, transparent 270deg)',
          'conic-gradient(from 180deg at 70% 30%, rgba(var(--accent-amber), 0.03) 0deg, transparent 90deg, rgba(var(--accent), 0.02) 180deg, transparent 270deg)',
          'conic-gradient(from 270deg at 20% 80%, rgba(var(--accent-cyan), 0.03) 0deg, transparent 90deg, rgba(var(--accent-emerald), 0.02) 180deg, transparent 270deg)',
          'radial-gradient(circle at 25% 25%, rgba(var(--accent), 0.02) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(var(--accent-cyan), 0.02) 0%, transparent 50%)',
          'radial-gradient(circle at 50% 10%, rgba(var(--accent-emerald), 0.02) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(var(--accent-rose), 0.02) 0%, transparent 50%)',
          'conic-gradient(from 0deg at 50% 50%, rgba(var(--accent), 0.03) 0deg, transparent 90deg, rgba(var(--accent-cyan), 0.02) 180deg, transparent 270deg)',
        ]
      }}
      transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
    />
  );
}