import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveSetting {
  breakpoint: number;
  itemsPerView: number;
}

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  itemsPerView?: number;
  responsive?: ResponsiveSetting[];
  gap?: number;
}

export function Carousel({
  children,
  className,
  itemClassName,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  loop = true,
  itemsPerView = 1,
  responsive = [],
  gap = 16,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeItemsPerView, setActiveItemsPerView] = useState(itemsPerView);
  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - activeItemsPerView);

  useEffect(() => {
    if (!responsive.length) {
      setActiveItemsPerView(itemsPerView);
      return;
    }

    const sortedBreakpoints = [...responsive].sort((a, b) => a.breakpoint - b.breakpoint);

    const updateItemsPerView = () => {
      const width = window.innerWidth;
      const matched = sortedBreakpoints.reduce(
        (current, rule) => (width >= rule.breakpoint ? rule.itemsPerView : current),
        itemsPerView
      );
      setActiveItemsPerView(matched);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [itemsPerView, responsive]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [activeItemsPerView, currentIndex, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? (loop ? 0 : prev) : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? (loop ? maxIndex : prev) : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className={cn('relative w-full', className)}>
      {/* Main Container */}
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={{ x: `-${currentIndex * (100 / activeItemsPerView)}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={cn(
                'flex-shrink-0',
                itemClassName
              )}
              style={{ width: `calc(${100 / activeItemsPerView}% - ${gap * (activeItemsPerView - 1) / activeItemsPerView}px)` }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalItems > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            disabled={!loop && currentIndex === 0}
            className={cn(
              'absolute left-4 top-1/2 -translate-y-1/2 z-10',
              'flex items-center justify-center w-12 h-12 rounded-full',
              'bg-[rgba(var(--surface),0.8)] backdrop-blur-sm border border-[rgba(var(--border),0.3)]',
              'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))]',
              'hover:bg-[rgba(var(--accent),0.1)] hover:border-[rgb(var(--accent))]',
              'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
              'shadow-lg hover:shadow-xl'
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={!loop && currentIndex === maxIndex}
            className={cn(
              'absolute right-4 top-1/2 -translate-y-1/2 z-10',
              'flex items-center justify-center w-12 h-12 rounded-full',
              'bg-[rgba(var(--surface),0.8)] backdrop-blur-sm border border-[rgba(var(--border),0.3)]',
              'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))]',
              'hover:bg-[rgba(var(--accent),0.1)] hover:border-[rgb(var(--accent))]',
              'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
              'shadow-lg hover:shadow-xl'
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalItems > itemsPerView && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-200',
                currentIndex === index
                  ? 'bg-[rgb(var(--accent))] scale-125'
                  : 'bg-[rgba(var(--text-secondary),0.3)] hover:bg-[rgba(var(--text-secondary),0.6)]'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}