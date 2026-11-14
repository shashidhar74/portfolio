import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WORDNEST } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { TechBadge } from '../../shared/tech-badge';

/** Featured personal project card. Content comes from WORDNEST in portfolio.data.ts. */
@Component({
  selector: 'app-wordnest',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, TechBadge],
  templateUrl: './wordnest.html',
})
export class Wordnest {
  protected readonly wn = WORDNEST;
  protected readonly liveHost = new URL(WORDNEST.liveUrl).host;
}
