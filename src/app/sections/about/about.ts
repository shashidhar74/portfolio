import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT, EXPERIENCE, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  template: `
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="container-x">
        <app-section-heading eyebrow="01 · About me" title="Enterprise Angular, with the full stack behind it." headingId="about-title" />

        <div class="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div appReveal>
            <p class="font-display text-xl leading-snug font-semibold text-pretty sm:text-[1.4rem]">{{ about.lead }}</p>
            @for (p of about.body; track $index) {
              <p class="mt-5 leading-relaxed text-muted">{{ p }}</p>
            }
            <dl class="mt-8 grid grid-cols-3 gap-3">
              <div class="rounded-2xl border border-line bg-surface p-4">
                <dt class="text-xs text-muted">Experience</dt>
                <dd class="mt-1 font-display text-2xl font-bold">3+ yrs</dd>
              </div>
              <div class="rounded-2xl border border-line bg-surface p-4">
                <dt class="text-xs text-muted">Focus</dt>
                <dd class="mt-1 font-display text-2xl font-bold">Angular</dd>
              </div>
              <div class="rounded-2xl border border-line bg-surface p-4">
                <dt class="text-xs text-muted">Based in</dt>
                <dd class="mt-1 font-display text-2xl font-bold">BLR</dd>
              </div>
            </dl>
            <p class="mt-4 text-sm text-faint">{{ exp.role }} at {{ profile.company }}, since May 2023.</p>
          </div>

          <ul class="grid gap-4 sm:grid-cols-2">
            @for (h of about.highlights; track h.title; let i = $index) {
              <li appReveal [revealDelay]="i * 60"
                  class="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-105">
                  <app-icon [name]="h.icon" [size]="19" />
                </span>
                <h3 class="mt-4 font-display font-bold">{{ h.title }}</h3>
                <p class="mt-1.5 text-[15px] leading-relaxed text-muted">{{ h.text }}</p>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly about = ABOUT;
  protected readonly exp = EXPERIENCE;
  protected readonly profile = PROFILE;
}
