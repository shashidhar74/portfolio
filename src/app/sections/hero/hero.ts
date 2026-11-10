import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

type TokenKind = 'k' | 's' | 'd' | 'p' | '';
type CodeLine = [TokenKind, string][];

// The "about me" class shown in the hero, written as TypeScript
const CODE: CodeLine[] = [
  [['d', '@Component'], ['', '({']],
  [['', '  selector: '], ['s', "'app-shashidhara'"], ['', ',']],
  [['', '})']],
  [['k', 'export class '], ['p', 'Shashidhara'], ['', ' {']],
  [['', '  role = '], ['s', "'Full Stack Angular Developer'"], ['', ';']],
  [['', '  experience = '], ['s', "'3+ years'"], ['', ';']],
  [['', '  frontend = ['], ['s', "'Angular 21'"], ['', ', '], ['s', "'Signals'"], ['', ', '], ['s', "'RxJS'"], ['', '];']],
  [['', '  backend = ['], ['s', "'Node.js'"], ['', ', '], ['s', "'NestJS'"], ['', ', '], ['s', "'GraphQL'"], ['', '];']],
  [['', '  ai = ['], ['s', "'scikit-learn'"], ['', ', '], ['s', "'FastAPI'"], ['', ', '], ['s', "'Gemini'"], ['', '];']],
  [['', '  basedIn = '], ['s', "'Bengaluru'"], ['', ';']],
  [['', '  status = '], ['s', "'Open to new roles'"], ['', ';']],
  [['', '}']],
];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly lines = CODE;
  protected readonly visible = signal(0);
  protected readonly tokenClass: Record<TokenKind, string> = {
    k: 'text-violet', s: 'text-amber', d: 'text-accent', p: 'text-cyan', '': '',
  };
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.visible.set(CODE.length);
      return;
    }
    const tick = () => {
      this.visible.update(v => v + 1);
      if (this.visible() < CODE.length) this.timer = setTimeout(tick, 110);
    };
    this.timer = setTimeout(tick, 300);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
