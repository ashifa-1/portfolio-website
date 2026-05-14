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
              'radial-gradient(circle at 20% 50%, rgba(var(--accent), 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(var(--accent-cyan), 0.04) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(var(--accent-emerald), 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(var(--accent), 0.03) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Dynamic Mesh Background */}
      <DynamicMeshBackground />

      {/* Ambient Light Blobs */}
      <FloatingLightOrbs count={6} size="large" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Floating Particles Component
function ParticlesSystem() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[rgba(var(--accent),0.4)] to-[rgba(var(--accent-cyan),0.4)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
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