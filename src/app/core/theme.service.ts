import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

/**
 * Light / dark theme as a signal. The initial value matches what the inline script
 * in index.html already applied (saved choice, else the OS preference), so there is no flash.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.initial());

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable: keep in memory */ }
  }

  private initial(): Theme {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
