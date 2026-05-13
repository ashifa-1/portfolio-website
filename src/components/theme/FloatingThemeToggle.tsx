import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Monitor, ChevronUp } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { key: 'light', label: 'Light', icon: Sun, color: 'text-yellow-500' },
    { key: 'dark', label: 'Dark', icon: Moon, color: 'text-blue-400' },
    { key: 'system', label: 'System', icon: Monitor, color: 'text-purple-400' },
  ] as const;

  const currentTheme = themes.find(t => t.key === theme) || themes[0];

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
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
          aria-label={`Current theme: ${currentTheme.label}. Click to change theme`}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <currentTheme.icon className={cn('h-5 w-5 transition-colors duration-300', currentTheme.color)} />
          </motion.div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={cn(
                'absolute top-full right-0 mt-3 w-48',
                'bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)]',
                'rounded-2xl shadow-xl shadow-black/20',
                'p-2'
              )}
            >
              {themes.map((themeOption, index) => {
                const Icon = themeOption.icon;
                const isActive = theme === themeOption.key;

                return (
                  <motion.button
                    key={themeOption.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setTheme(themeOption.key);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left',
                      'transition-all duration-200 ease-out',
                      'hover:bg-[rgba(255,255,255,0.1)]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-inset',
                      isActive && 'bg-[rgba(var(--accent),0.15)] text-[rgb(var(--accent))]'
                    )}
                    aria-label={`Switch to ${themeOption.label} theme`}
                  >
                    <Icon className={cn('h-4 w-4', themeOption.color)} />
                    <span className="text-sm font-medium">{themeOption.label}</span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto h-2 w-2 rounded-full bg-[rgb(var(--accent))]"
                      />
                    )}
                  </motion.button>
                );
              })}
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