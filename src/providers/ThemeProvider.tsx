import type { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { AccentColorProvider } from '@/components/theme/AccentColorProvider';

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      <AccentColorProvider>{children}</AccentColorProvider>
    </NextThemesProvider>
  );
}
