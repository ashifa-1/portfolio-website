import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { AccentSwitcher } from '@/components/theme/AccentSwitcher';
import { Container } from '@/components/common/Container';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_22%),radial-gradient(circle_at_60%_30%,_rgba(139,92,246,0.14),transparent_28%),rgb(var(--bg))] text-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80">
        <Container className="flex items-center justify-between gap-4 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Portfolio System
            </p>
            <h1 className="text-lg font-semibold text-slate-950 dark:text-white">Modern Brand Studio</h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ThemeToggle />
            <AccentSwitcher />
          </div>
        </Container>
      </header>

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

      <footer className="border-t border-slate-200/70 bg-white/70 py-8 text-sm text-slate-600 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80 dark:text-slate-400">
        <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Built for elegant experiences with scalable frontend architecture.</p>
          <p>Accent palette, theme persistence, and responsive design ready.</p>
        </Container>
      </footer>
    </div>
  );
}
