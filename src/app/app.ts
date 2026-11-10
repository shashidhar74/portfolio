import { Component } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Wordnest } from './sections/wordnest/wordnest';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Experience, Wordnest, Projects, Skills, Contact, Footer],
  templateUrl: './app.html',
})
export class App {}
