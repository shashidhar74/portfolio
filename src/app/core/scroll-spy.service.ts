import { Injectable, signal } from '@angular/core';

/** Tracks which page section is currently in view, for the active nav indicator. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly active = signal<string>('home');
  private observer?: IntersectionObserver;

  watch(ids: readonly string[]): () => void {
    if (!('IntersectionObserver' in window)) return () => {};
    const visible = new Map<string, number>();

    this.observer = new IntersectionObserver(
      entries => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        // At the very bottom the last (short) section may never dominate: prefer it.
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom) { this.active.set(ids[ids.length - 1]); return; }
        const best = ids.reduce((a, b) => ((visible.get(b) ?? 0) > (visible.get(a) ?? 0) ? b : a), ids[0]);
        if ((visible.get(best) ?? 0) > 0) this.active.set(best);
      },
      // A band across the upper-middle of the viewport decides the "current" section.
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.01, 0.25, 0.5, 1] },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
    return () => this.observer?.disconnect();
  }

  /** Smoothly scrolls to a section and moves focus there for keyboard and screen-reader users. */
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    history.replaceState(null, '', `#${id}`);
    this.active.set(id);
  }
}
