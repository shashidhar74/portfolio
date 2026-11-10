import { Component } from '@angular/core';
import { SIMS_OS, WORK_PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly featured = SIMS_OS;
  protected readonly others = WORK_PROJECTS;
}
