import { motion, MotionConfig } from 'framer-motion';
import { FloatingControls } from '@/components/theme/FloatingControls';
import { InteractiveBackground } from '@/components/theme/InteractiveBackground';
import { Navbar } from '@/components/common/Navbar';
import { Container } from '@/components/common/Container';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <InteractiveBackground>
        {/* Enhanced Multi-layered Background */}
        <div className="fixed inset-0 -z-50">
          {/* Base gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--bg))] via-[rgba(var(--accent),0.02)] to-[rgb(var(--bg))]" />

          {/* Ambient glow layers */}
          <div className="absolute inset-0 bg-gradient-radial from-[rgba(var(--accent),0.03)] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-conic from-[rgba(var(--accent-cyan),0.02)] via-transparent to-[rgba(var(--accent-emerald),0.02)] opacity-40" />

          {/* Subtle animated noise texture */}
          <div className="absolute inset-0 opacity-[0.015] bg-noise animate-noise" />

          {/* Floating ambient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-[rgba(var(--accent),0.04)] to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-[rgba(var(--accent-cyan),0.03)] to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.35, 0.25]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4
            }}
            className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-gradient-radial from-[rgba(var(--accent-emerald),0.03)] to-transparent blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-slate-950 dark:text-slate-100">
          {/* Floating Controls */}
          <FloatingControls />

          {/* Navigation */}
          <Navbar />

          <main className="py-16">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/80"
              >
                {children}
              </motion.div>
            </Container>
          </main>
        </div>
      </InteractiveBackground>
    </MotionConfig>
  );
}
