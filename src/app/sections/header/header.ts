import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ScrollSpyService } from '../../core/scroll-spy.service';
import { NAV, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './header.html',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu(true)',
  },
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly spy = inject(ScrollSpyService);
  protected readonly nav = NAV;
  protected readonly profile = PROFILE;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.onScroll();
      const stop = this.spy.watch(this.nav.map(n => n.id));
      destroyRef.onDestroy(stop);
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected go(event: Event, id: string): void {
    event.preventDefault();
    this.menuOpen.set(false);
    this.spy.scrollTo(id);
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(returnFocus = false): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    if (returnFocus) this.menuButton()?.nativeElement.focus();
  }
}
