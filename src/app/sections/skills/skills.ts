import { Component } from '@angular/core';
import { AWARDS, EDUCATION, SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skills = SKILLS;
  protected readonly awards = AWARDS;
  protected readonly education = EDUCATION;
}
