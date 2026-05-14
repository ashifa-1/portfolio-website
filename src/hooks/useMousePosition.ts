import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function useMousePosition() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY, springX, springY };
}

export function useCursorGlow() {
  const { springX, springY } = useMousePosition();

  // Transform for cursor glow positioning
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  useEffect(() => {
    const unsubscribeX = springX.on('change', (x) => glowX.set(x));
    const unsubscribeY = springY.on('change', (y) => glowY.set(y));

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY, glowX, glowY]);

  return { glowX, glowY };
}