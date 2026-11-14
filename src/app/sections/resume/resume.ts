import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RESUMES } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-resume',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="resume" class="border-t border-line bg-bg-soft/60 py-20 sm:py-24" aria-labelledby="resume-title">
      <div class="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div appReveal>
          <p class="eyebrow">Résumé</p>
          <h2 id="resume-title" class="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Two versions, one for each role.</h2>
          <p class="mt-4 leading-relaxed text-muted">Pick the one that matches the position you’re hiring for. Both are up-to-date PDFs.</p>
        </div>

        <ul class="grid gap-5 sm:grid-cols-2">
          @for (r of resumes; track r.title; let i = $index) {
            <li appReveal [revealDelay]="i * 80" class="card flex flex-col p-6">
              <div class="flex items-start justify-between gap-3">
                <span class="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent"><app-icon name="file" [size]="21" /></span>
                <span class="chip">{{ r.focus }}</span>
              </div>
              <h3 class="mt-5 font-display text-lg font-bold">{{ r.title }}</h3>
              @if (r.sizeLabel) { <p class="font-code text-xs text-faint">{{ r.sizeLabel }}</p> }
              <ul class="mt-4 space-y-1.5">
                @for (p of r.points; track p) {
                  <li class="flex gap-2 text-[14px] text-muted"><span class="mt-0.5 text-accent"><app-icon name="check" [size]="15" /></span>{{ p }}</li>
                }
              </ul>
              <div class="mt-auto flex gap-2 pt-6">
                @if (r.file) {
                  <a [href]="r.file" download class="btn btn-primary btn-sm flex-1" [attr.aria-label]="'Download ' + r.title + ' resume (PDF)'">
                    <app-icon name="download" [size]="16" /> Download
                  </a>
                  <a [href]="r.file" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" [attr.aria-label]="'View ' + r.title + ' resume in a new tab'">
                    <app-icon name="eye" [size]="16" /> View
                  </a>
                } @else {
                  <p class="w-full rounded-lg border border-dashed border-line-strong px-3 py-2 text-center text-sm text-muted">PDF coming soon</p>
                }
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Resume {
  protected readonly resumes = RESUMES;
}
