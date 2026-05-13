import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] shadow-lg shadow-[rgba(var(--accent),0.25)] hover:bg-[rgba(var(--accent),0.9)] hover:shadow-xl hover:shadow-[rgba(var(--accent),0.3)] hover:scale-105',
        secondary: 'bg-[rgb(var(--surface-secondary))] text-[rgb(var(--text))] border border-[rgb(var(--border))] hover:bg-[rgb(var(--surface))] hover:border-[rgb(var(--border-secondary))]',
        outline: 'border-2 border-[rgb(var(--accent))] bg-transparent text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--accent-foreground))] hover:shadow-lg hover:shadow-[rgba(var(--accent),0.25)]',
        ghost: 'bg-transparent text-[rgb(var(--text))] hover:bg-[rgba(var(--accent),0.1)] hover:text-[rgb(var(--accent))]',
        glass: 'glass text-[rgb(var(--text))] hover:bg-[rgba(255,255,255,0.15)] hover:backdrop-blur-xl border border-[rgba(255,255,255,0.2)]',
        gradient: 'gradient-accent text-white shadow-lg hover:shadow-xl hover:shadow-[rgba(var(--accent),0.4)] hover:scale-105',
        glow: 'bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] glow hover:glow-lg hover:scale-105',
        minimal: 'bg-transparent text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))] hover:bg-[rgba(var(--accent),0.05)]'
      },
      size: {
        default: 'h-11 px-7',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-12 px-9 text-base',
        xl: 'h-14 px-12 text-lg'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
