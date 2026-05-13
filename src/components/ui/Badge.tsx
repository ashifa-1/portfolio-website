import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[rgba(var(--accent),0.1)] text-[rgb(var(--accent))] border border-[rgba(var(--accent),0.2)]',
        secondary: 'bg-[rgb(var(--surface-secondary))] text-[rgb(var(--text-secondary))] border border-[rgb(var(--border))]',
        outline: 'border border-[rgb(var(--border-secondary))] text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--surface-secondary))]',
        glass: 'glass text-[rgb(var(--text))] border border-[rgba(255,255,255,0.2)]',
        glow: 'bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] glow-sm'
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, variant, size, children }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}