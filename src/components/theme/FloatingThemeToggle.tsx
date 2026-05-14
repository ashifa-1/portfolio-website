import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { key: 'light', label: 'Light', icon: Sun, color: 'text-yellow-500' },
    { key: 'dark', label: 'Dark', icon: Moon, color: 'text-blue-400' },
  ] as const;

  const currentTheme = themes.find(t => t.key === theme) || themes[1]; // Default to dark if not found

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
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
          onClick={toggleTheme}
          className={cn(
            'group relative flex h-12 w-12 items-center justify-center rounded-2xl',
            'bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)]',
            'shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15',
            'transition-all duration-300 ease-out',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
          )}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <currentTheme.icon className={cn('h-5 w-5 transition-colors duration-300', currentTheme.color)} />
          </motion.div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(var(--accent),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
}