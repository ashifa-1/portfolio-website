import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full bg-[rgba(139,92,246,0.08)] px-4 py-2 text-sm font-medium text-violet-700 dark:text-violet-200"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent))]" />
          Premium portfolio system
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 dark:text-white sm:text-5xl">
            Designed for high-impact digital presence and elegant storytelling.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            A premium React portfolio foundation with animated interactions, system theming, and a polished architecture that scales into a full brand experience.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }} className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button className="w-full sm:w-auto" size="lg">
            Start building
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full sm:w-auto">
            Explore architecture
          </Button>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-soft dark:border-slate-700/80 dark:bg-slate-900"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(var(--accent),0.22),transparent_50%)]" />
        <div className="relative space-y-6">
          <div className="flex items-center justify-between gap-3 rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-200/40 dark:bg-slate-950/80 dark:shadow-none">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Brand system</p>
              <p className="mt-2 font-semibold text-slate-950 dark:text-white">Theme-ready design tokens</p>
            </div>
            <div className="h-12 w-12 rounded-3xl bg-[rgb(var(--accent))]" />
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 text-slate-700 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/80 dark:text-slate-300">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">System highlights</p>
            <ul className="mt-5 space-y-3 text-sm leading-7">
              <li>• Tailwind CSS with responsive utility design</li>
              <li>• Dark/light/system theme support</li>
              <li>• Accent palette persistence in localStorage</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200/70 bg-slate-100 p-6 dark:border-slate-700/70 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Design system</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <span className="rounded-3xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-950">Typography</span>
              <span className="rounded-3xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-950">Motion</span>
              <span className="rounded-3xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-slate-950">Tokens</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
