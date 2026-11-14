import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AWARDS, EDUCATION, IconName } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-achievements',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  template: `
    <section id="achievements" class="section" aria-labelledby="achievements-title">
      <div class="container-x">
        <app-section-heading eyebrow="05 · Recognition" title="Recognized three times in six months." headingId="achievements-title"
          lede="Awards from Muraai Information Technology for delivery and innovation in Angular development." />

        <ul class="mt-12 grid gap-5 md:grid-cols-3">
          @for (a of awards; track a.title; let i = $index) {
            <li appReveal [revealDelay]="i * 80" class="card relative overflow-hidden p-6">
              <div class="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl"
                   [class]="i === 0 ? 'bg-warm/15' : 'bg-accent/10'" aria-hidden="true"></div>
              <div class="relative flex items-center justify-between">
                <span class="grid h-11 w-11 place-items-center rounded-xl"
                      [class]="i === 0 ? 'bg-warm/15 text-warm' : 'bg-accent/10 text-accent'">
                  <app-icon [name]="icons[i]" [size]="21" />
                </span>
                <span class="font-code text-xs text-faint">{{ a.date }}</span>
              </div>
              <h3 class="relative mt-5 font-display text-lg font-bold">{{ a.title }}</h3>
              <p class="relative text-[13px] font-medium text-muted">{{ a.org }}</p>
              <p class="relative mt-3 text-[14.5px] leading-relaxed text-muted">{{ a.reason }}</p>
            </li>
          }
        </ul>

        <div appReveal class="mt-5 grid gap-5 md:grid-cols-2">
          @for (e of education; track e.title) {
            <div class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-bg-soft text-muted"><app-icon name="grad" [size]="20" /></span>
              <div class="min-w-0">
                <p class="font-semibold">{{ e.title }}</p>
                <p class="text-sm text-muted">{{ e.place }} · {{ e.period }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Achievements {
  protected readonly awards = AWARDS;
  protected readonly education = EDUCATION;
  protected readonly icons: IconName[] = ['trophy', 'award', 'star'];
}
