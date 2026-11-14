import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Reveal } from './reveal.directive';

/** Consistent section header: mono eyebrow, display title and optional lede. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  template: `
    <div appReveal class="max-w-2xl" [class.mx-auto]="center()" [class.text-center]="center()">
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h2 [id]="headingId()" class="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{{ title() }}</h2>
      @if (lede()) {
        <p class="mt-4 text-[17px] leading-relaxed text-muted text-pretty">{{ lede() }}</p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lede = input<string>();
  readonly headingId = input<string>();
  readonly center = input(false);
}
