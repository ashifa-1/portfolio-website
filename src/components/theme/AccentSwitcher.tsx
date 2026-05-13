import { useAccentColor } from '@/components/theme/AccentColorProvider';
import { cn } from '@/lib/utils';

export function AccentSwitcher() {
  const { accent, accentList, setAccent } = useAccentColor();

  return (
    <div className="grid gap-2 sm:grid-cols-5">
      {accentList.map((color) => (
        <button
          key={color}
          type="button"
          aria-pressed={accent === color}
          onClick={() => setAccent(color)}
          className={cn(
            'h-10 rounded-full border border-white/10 text-xs font-medium transition-all duration-200',
            accent === color
              ? 'ring-2 ring-offset-2 ring-[rgb(var(--accent))] bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))]'
              : 'bg-white/10 text-slate-900 hover:bg-white/20 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
          )}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
