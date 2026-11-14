import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Achievements } from './sections/achievements/achievements';
import { Resume } from './sections/resume/resume';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, Hero, About, Experience, Projects, Skills, Achievements, Resume, Contact, Footer],
  templateUrl: './app.html',
})
export class App {}
