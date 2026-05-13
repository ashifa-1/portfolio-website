import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ACCENT_COLORS = ['violet', 'cyan', 'emerald', 'rose', 'amber'] as const;
export type AccentColor = (typeof ACCENT_COLORS)[number];

interface AccentColorContextValue {
  accent: AccentColor;
  accentList: readonly AccentColor[];
  setAccent: (accent: AccentColor) => void;
}

const AccentColorContext = createContext<AccentColorContextValue | undefined>(undefined);

interface AccentColorProviderProps {
  children: React.ReactNode;
}

export function AccentColorProvider({ children }: AccentColorProviderProps) {
  const [accent, setAccent] = useState<AccentColor>('violet');

  useEffect(() => {
    const storedAccent = window.localStorage.getItem('portfolio-accent') as AccentColor | null;
    if (storedAccent && ACCENT_COLORS.includes(storedAccent)) {
      setAccent(storedAccent);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    window.localStorage.setItem('portfolio-accent', accent);
  }, [accent]);

  const value = useMemo(() => ({ accent, accentList: ACCENT_COLORS, setAccent }), [accent]);

  return <AccentColorContext.Provider value={value}>{children}</AccentColorContext.Provider>;
}

export function useAccentColor() {
  const context = useContext(AccentColorContext);
  if (!context) {
    throw new Error('useAccentColor must be used inside AccentColorProvider');
  }
  return context;
}
