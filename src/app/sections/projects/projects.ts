import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DCR, SIMS, SIMS_OS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { TechBadge } from '../../shared/tech-badge';
import { Wordnest } from '../wordnest/wordnest';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading, TechBadge, Wordnest],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly simsOs = SIMS_OS;
  protected readonly dcr = DCR;
  protected readonly sims = SIMS;
}
