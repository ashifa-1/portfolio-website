import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FloatingLightOrbs, DynamicMeshBackground } from './InteractiveLighting';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

export function InteractiveBackground({ children }: InteractiveBackgroundProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth spring animations for cursor following
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Transform cursor position for different effects
  const cursorGlowX = useTransform(springX, [0, window.innerWidth], [-100, window.innerWidth + 100]);
  const cursorGlowY = useTransform(springY, [0, window.innerHeight], [-100, window.innerHeight + 100]);

  // Scroll-based parallax
  const { scrollY } = useScroll();
  const scrollParallax = useTransform(scrollY, [0, 1000], [0, -200]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Interactive Cursor Glow */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 300px at ${cursorGlowX}px ${cursorGlowY}px,
            rgba(var(--accent), ${isHovered ? 0.08 : 0.04}) 0%,
            rgba(var(--accent-cyan), ${isHovered ? 0.06 : 0.03}) 30%,
            transparent 70%)`,
        }}
      />

      {/* Floating Particles System */}
      <ParticlesSystem />

      {/* Animated Gradient Waves */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: scrollParallax }}
      >
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(var(--accent), 0.04) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(var(--accent-cyan), 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(var(--accent-emerald), 0.04) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 30%, rgba(var(--accent-rose), 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 10% 90%, rgba(var(--accent-amber), 0.04) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(var(--accent), 0.04) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Floating Gradient Blobs */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 70%, rgba(var(--accent), 0.03) 0%, transparent 40%)',
            'radial-gradient(circle at 70% 30%, rgba(var(--accent-cyan), 0.03) 0%, transparent 40%)',
            'radial-gradient(circle at 50% 50%, rgba(var(--accent-emerald), 0.02) 0%, transparent 40%)',
            'radial-gradient(circle at 20% 80%, rgba(var(--accent-rose), 0.03) 0%, transparent 40%)',
            'radial-gradient(circle at 80% 20%, rgba(var(--accent-amber), 0.02) 0%, transparent 40%)',
            'radial-gradient(circle at 30% 70%, rgba(var(--accent), 0.03) 0%, transparent 40%)',
          ]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dynamic Mesh Background */}
      <DynamicMeshBackground />

      {/* Ambient Light Blobs */}
      <FloatingLightOrbs count={8} size="large" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Floating Particles Component
function ParticlesSystem() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 25,
    duration: Math.random() * 15 + 20,
    color: ['var(--accent)', 'var(--accent-cyan)', 'var(--accent-emerald)', 'var(--accent-rose)', 'var(--accent-amber)'][Math.floor(Math.random() * 5)],
    type: Math.random() > 0.7 ? 'dot' : 'particle', // Mix of dots and particles
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.type === 'dot' ? 'rounded-full' : 'rounded-full blur-sm'}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.type === 'dot'
              ? `rgba(${particle.color}, 0.6)`
              : `radial-gradient(circle, rgba(${particle.color}, 0.4) 0%, rgba(${particle.color}, 0.2) 50%, transparent 100%)`,
          }}
          animate={{
            x: [0, Math.random() * 300 - 150, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 300 - 150, Math.random() * 200 - 100, 0],
            opacity: [0.1, 0.7, 0.3, 0.1],
            scale: [0.8, 1.2, 0.9, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}