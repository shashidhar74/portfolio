import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-line">
      <div class="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-8 text-sm text-muted">
        <p>Shashidhara S, Bengaluru</p>
        <p>Built with Angular and Tailwind CSS</p>
      </div>
    </footer>
  `,
})
export class Footer {}
