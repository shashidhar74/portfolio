import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Skipped entirely for reduced-motion users and browsers without IntersectionObserver.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  /** Delay in ms, handy for staggering cards in a grid. */
  readonly revealDelay = input(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || !('IntersectionObserver' in window)) return;

      // Already on screen at load (e.g. the hero): don't animate, just show it.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) return;

      el.classList.add('reveal');
      el.style.transitionDelay = `${this.revealDelay()}ms`;
      const io = new IntersectionObserver(
        entries => {
          if (entries.some(e => e.isIntersecting)) {
            el.classList.add('is-visible');
            io.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      io.observe(el);
      destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
