import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { TechBadge } from '../../shared/tech-badge';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading, TechBadge],
  template: `
    <section id="skills" class="section border-t border-line bg-bg-soft/60" aria-labelledby="skills-title">
      <div class="container-x">
        <app-section-heading eyebrow="04 · Skills" title="The toolkit I use every day." headingId="skills-title"
          lede="Grouped by where they sit in the stack — no made-up percentages." />

        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          @for (g of skills; track g.title; let i = $index) {
            <article appReveal [revealDelay]="(i % 3) * 70"
                     class="group rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong">
              <div class="flex items-center gap-3">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><app-icon [name]="g.icon" [size]="19" /></span>
                <div>
                  <h3 class="font-display text-lg font-bold">{{ g.title }}</h3>
                  <p class="text-[13px] text-faint">{{ g.blurb }}</p>
                </div>
              </div>
              <ul class="mt-5 flex flex-wrap gap-2" [attr.aria-label]="g.title + ' skills'">
                @for (t of g.items; track t.name) { <li><app-tech-badge [tech]="t" /></li> }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly skills = SKILLS;
}
