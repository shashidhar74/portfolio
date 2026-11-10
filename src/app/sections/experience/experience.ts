import { Component } from '@angular/core';
import { ACHIEVEMENTS, ROLES, STATS } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly stats = STATS;
  protected readonly roles = ROLES;
  protected readonly achievements = ACHIEVEMENTS;
}
