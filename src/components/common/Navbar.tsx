import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)] shadow-lg shadow-black/5'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className="text-lg font-semibold text-[rgb(var(--text))] hidden sm:block">
                Mohammed Ahmad Ashifa
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'hover:text-[rgb(var(--accent))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2',
                    activeSection === item.href.substring(1)
                      ? 'text-[rgb(var(--accent))]'
                      : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text))]'
                  )}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}

                  {/* Active underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-[rgb(var(--accent))] rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{
                      width: activeSection === item.href.substring(1) ? '60%' : 0,
                      x: '-50%'
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />

                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-[rgb(var(--accent))] rounded-full opacity-0"
                    whileHover={{ width: '60%', x: '-50%', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'lg:hidden relative p-2 rounded-lg transition-colors duration-200',
                'hover:bg-[rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2'
              )}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full transform origin-center transition-colors duration-200"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full transform origin-center transition-colors duration-200"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full transform origin-center transition-colors duration-200"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className={cn(
                'fixed top-0 right-0 h-full w-80 max-w-[90vw] z-40',
                'bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-l border-[rgba(255,255,255,0.1)]',
                'shadow-2xl lg:hidden'
              )}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.1)]">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[rgb(var(--accent))] to-[rgba(var(--accent),0.8)] flex items-center justify-center">
                      <span className="text-white font-bold">AM</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
                        Ashifa Mohammed
                      </h3>
                      <p className="text-sm text-[rgb(var(--text-secondary))]">
                        AI Engineer & Developer
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5 text-[rgb(var(--text))]" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6">
                  <nav className="px-6">
                    <ul className="space-y-2">
                      {navigation.map((item, index) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <button
                            onClick={() => scrollToSection(item.href)}
                            className={cn(
                              'w-full text-left px-4 py-3 rounded-lg transition-all duration-200',
                              'hover:bg-[rgba(255,255,255,0.1)] hover:translate-x-1',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-inset',
                              activeSection === item.href.substring(1)
                                ? 'bg-[rgba(var(--accent),0.1)] text-[rgb(var(--accent))] border-l-4 border-[rgb(var(--accent))]'
                                : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text))]'
                            )}
                            aria-label={`Navigate to ${item.name} section`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{item.name}</span>
                              {activeSection === item.href.substring(1) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]"
                                />
                              )}
                            </div>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-[rgba(255,255,255,0.1)]">
                  <p className="text-xs text-[rgb(var(--text-secondary))] text-center">
                    Crafting intelligent solutions with AI & code
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}