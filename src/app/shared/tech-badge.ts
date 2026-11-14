import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Tech } from '../data/portfolio.data';

/** A technology chip with an optional monochrome logo (from public/icons) that follows the theme colour. */
@Component({
  selector: 'app-tech-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'contents' },
  template: `
    <span class="chip">
      @if (tech().logo) {
        <span class="tech-logo text-[13px]" [style.--icon]="iconUrl()" aria-hidden="true"></span>
      } @else {
        <span class="h-1.5 w-1.5 rounded-full bg-faint" aria-hidden="true"></span>
      }
      {{ tech().name }}
    </span>
  `,
})
export class TechBadge {
  readonly tech = input.required<Tech>();
  // Relative URL so it resolves against <base href> (GitHub Pages sub-path).
  protected readonly iconUrl = computed(() => `url("icons/${this.tech().logo}.svg")`);
}
