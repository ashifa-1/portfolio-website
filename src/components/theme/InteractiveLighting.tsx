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
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function FloatingLightOrbs({
  count = 8,
  size = 'medium',
  className = ''
}: FloatingLightOrbsProps) {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 20,
    duration: Math.random() * 15 + 10,
    color: ['var(--accent)', 'var(--accent-cyan)', 'var(--accent-emerald)', 'var(--accent-rose)'][Math.floor(Math.random() * 4)],
  }));

  const sizeMap = {
    small: { width: 60, height: 60 },
    medium: { width: 100, height: 100 },
    large: { width: 150, height: 150 }
  };

  const orbSize = sizeMap[size];

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-xl"
          style={{
            width: orbSize.width,
            height: orbSize.height,
            background: `radial-gradient(circle, rgba(${orb.color}, 0.15) 0%, rgba(${orb.color}, 0.08) 40%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
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
          'conic-gradient(from 0deg at 50% 50%, rgba(var(--accent), 0.02) 0deg, transparent 90deg, rgba(var(--accent-cyan), 0.02) 180deg, transparent 270deg)',
          'conic-gradient(from 90deg at 30% 70%, rgba(var(--accent-emerald), 0.02) 0deg, transparent 90deg, rgba(var(--accent-rose), 0.02) 180deg, transparent 270deg)',
          'conic-gradient(from 180deg at 70% 30%, rgba(var(--accent-amber), 0.02) 0deg, transparent 90deg, rgba(var(--accent), 0.02) 180deg, transparent 270deg)',
          'conic-gradient(from 270deg at 20% 80%, rgba(var(--accent-cyan), 0.02) 0deg, transparent 90deg, rgba(var(--accent-emerald), 0.02) 180deg, transparent 270deg)',
        ]
      }}
      transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
    />
  );
}