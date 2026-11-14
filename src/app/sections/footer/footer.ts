import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NAV, PROFILE } from '../../data/portfolio.data';
import { ScrollSpyService } from '../../core/scroll-spy.service';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <footer class="border-t border-line">
      <div class="container-x flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-display font-bold">{{ profile.name }}</p>
          <p class="mt-1 text-sm text-muted">{{ profile.title }} · {{ profile.location }}</p>
        </div>
        <nav aria-label="Footer">
          <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            @for (n of nav; track n.id) {
              <li><a [href]="'#' + n.id" (click)="go($event, n.id)" class="hover:text-ink">{{ n.label }}</a></li>
            }
          </ul>
        </nav>
        <div class="flex items-center gap-2">
          <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub (opens in new tab)" class="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted hover:text-ink"><app-icon name="github" [size]="18" /></a>
          <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn (opens in new tab)" class="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted hover:text-ink"><app-icon name="linkedin" [size]="16" /></a>
          <a [href]="'mailto:' + profile.email" aria-label="Email" class="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted hover:text-ink"><app-icon name="mail" [size]="18" /></a>
          <a href="#home" (click)="go($event, 'home')" aria-label="Back to top" class="grid h-10 w-10 place-items-center rounded-xl bg-ink text-bg"><app-icon name="arrow-up" [size]="18" /></a>
        </div>
      </div>
      <div class="border-t border-line">
        <p class="container-x py-5 text-xs text-faint">© {{ year }} {{ profile.name }} · Built with Angular & Tailwind CSS</p>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly nav = NAV;
  protected readonly year = new Date().getFullYear();
  private readonly spy = inject(ScrollSpyService);

  protected go(event: Event, id: string): void {
    event.preventDefault();
    this.spy.scrollTo(id);
  }
}
