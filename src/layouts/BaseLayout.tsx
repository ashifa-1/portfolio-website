import { motion, MotionConfig } from 'framer-motion';
import { FloatingControls } from '@/components/theme/FloatingControls';
import { Navbar } from '@/components/common/Navbar';
import { Container } from '@/components/common/Container';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_22%),radial-gradient(circle_at_60%_30%,_rgba(139,92,246,0.14),transparent_28%),rgb(var(--bg))] text-slate-950 dark:text-slate-100">
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
    </MotionConfig>
  );
}
