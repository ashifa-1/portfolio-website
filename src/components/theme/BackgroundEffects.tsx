import { motion } from 'framer-motion';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      
      {/* Main Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--accent),0.25) 0%, transparent 70%)',
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, -120, 40, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-15%] right-[-10%] h-[450px] w-[450px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--accent),0.18) 0%, transparent 70%)',
        }}
      />

      {/* Floating Small Orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full blur-2xl opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--accent),0.3) 0%, transparent 70%)',
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}