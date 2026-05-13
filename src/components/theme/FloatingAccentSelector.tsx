import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ChevronDown } from 'lucide-react';
import { useAccentColor } from '@/components/theme/AccentColorProvider';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ACCENT_COLORS = [
  { key: 'violet', label: 'Violet', color: 'rgb(var(--accent-violet))', bgClass: 'bg-violet-500' },
  { key: 'cyan', label: 'Cyan', color: 'rgb(var(--accent-cyan))', bgClass: 'bg-cyan-500' },
  { key: 'emerald', label: 'Emerald', color: 'rgb(var(--accent-emerald))', bgClass: 'bg-emerald-500' },
  { key: 'rose', label: 'Rose', color: 'rgb(var(--accent-rose))', bgClass: 'bg-rose-500' },
  { key: 'amber', label: 'Amber', color: 'rgb(var(--accent-amber))', bgClass: 'bg-amber-500' },
] as const;

export function FloatingAccentSelector() {
  const { accent, setAccent } = useAccentColor();
  const [isOpen, setIsOpen] = useState(false);

  const currentAccent = ACCENT_COLORS.find(c => c.key === accent) || ACCENT_COLORS[0];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
        className="relative"
      >
        {/* Main Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'group relative flex h-12 w-12 items-center justify-center rounded-2xl',
            'bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)]',
            'shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15',
            'transition-all duration-300 ease-out',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
          )}
          aria-label={`Current accent: ${currentAccent.label}. Click to change accent color`}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <Palette className="h-5 w-5 text-[rgb(var(--accent))]" />
              {/* Color indicator dot */}
              <motion.div
                className={cn('absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white', currentAccent.bgClass)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={cn(
                'absolute bottom-full left-0 mb-3 w-56',
                'bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)]',
                'rounded-2xl shadow-xl shadow-black/20',
                'p-3'
              )}
            >
              <div className="mb-3 px-2">
                <h3 className="text-sm font-semibold text-[rgb(var(--text))]">Accent Colors</h3>
                <p className="text-xs text-[rgb(var(--text-secondary))]">Choose your theme color</p>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {ACCENT_COLORS.map((colorOption, index) => {
                  const isActive = accent === colorOption.key;

                  return (
                    <motion.button
                      key={colorOption.key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setAccent(colorOption.key as any);
                        setIsOpen(false);
                      }}
                      className={cn(
                        'group relative h-10 w-10 rounded-xl border-2 transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-1',
                        isActive
                          ? 'border-[rgb(var(--accent))] shadow-lg shadow-[rgba(var(--accent),0.3)]'
                          : 'border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)]'
                      )}
                      aria-label={`Select ${colorOption.label} accent color`}
                      title={colorOption.label}
                    >
                      <div
                        className={cn('h-full w-full rounded-lg', colorOption.bgClass)}
                        style={{ backgroundColor: isActive ? undefined : colorOption.color }}
                      />

                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="h-3 w-3 rounded-full bg-white shadow-sm" />
                        </motion.div>
                      )}

                      {/* Hover glow effect */}
                      <div className={cn(
                        'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                        'bg-gradient-to-br from-white/20 to-transparent'
                      )} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Color preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 flex items-center justify-center gap-2"
              >
                <div className="text-xs text-[rgb(var(--text-secondary))]">Preview:</div>
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-[rgb(var(--accent))] shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-[rgba(var(--accent),0.7)] shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-[rgba(var(--accent),0.4)] shadow-sm" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop for closing */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </motion.div>
    </div>
  );
}