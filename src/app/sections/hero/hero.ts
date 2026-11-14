import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AVAILABILITY, PROFILE, RESUMES } from '../../data/portfolio.data';
import { ScrollSpyService } from '../../core/scroll-spy.service';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly availability = AVAILABILITY;
  protected readonly resumes = RESUMES;
  private readonly spy = inject(ScrollSpyService);

  protected go(event: Event, id: string): void {
    event.preventDefault();
    this.spy.scrollTo(id);
  }
}
