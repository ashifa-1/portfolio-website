import { Moon, Sun, Laptop2 } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const nextTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark';
  const icon = nextTheme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle dark mode"
      className="gap-2"
    >
      {icon}
      <span className="hidden sm:inline">{nextTheme === 'dark' ? 'Dark' : 'Light'}</span>
      <Laptop2 className="hidden h-4 w-4 sm:inline" />
    </Button>
  );
}
