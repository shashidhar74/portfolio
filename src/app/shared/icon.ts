import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from '../data/portfolio.data';

/** Small inline line-icon set (24px grid, stroke = currentColor). Decorative by default. */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      @switch (name()) {
        @case ('github') { <path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/> }
        @case ('linkedin') { <path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/> }
        @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/> }
        @case ('pin') { <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/> }
        @case ('download') { <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/> }
        @case ('arrow-right') { <path d="M5 12h14m-5-5 5 5-5 5"/> }
        @case ('arrow-up-right') { <path d="M7 17 17 7m-8 0h8v8"/> }
        @case ('arrow-up') { <path d="M12 19V5m-6 6 6-6 6 6"/> }
        @case ('sun') { <circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/> }
        @case ('moon') { <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16"/> }
        @case ('close') { <path d="M6 6l12 12M18 6 6 18"/> }
        @case ('layers') { <path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/> }
        @case ('server') { <rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/> }
        @case ('database') { <ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/> }
        @case ('flask') { <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10"/> }
        @case ('tool') { <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 6.3-6.3a4 4 0 0 1-5-5L9 3l-.5.5A4 4 0 0 0 14.7 6.3ZM3 21l4-4"/> }
        @case ('sparkles') { <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/> }
        @case ('shield') { <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/> }
        @case ('workflow') { <rect x="3" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/><path d="M6.5 9v4a2 2 0 0 0 2 2H14"/> }
        @case ('users') { <circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/> }
        @case ('code') { <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/> }
        @case ('trophy') { <path d="M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5A3.5 3.5 0 0 1 16.5 11M12 14v3m-4 4h8l-1-4H9l-1 4Z"/> }
        @case ('award') { <circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/> }
        @case ('star') { <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/> }
        @case ('file') { <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/> }
        @case ('copy') { <rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/> }
        @case ('check') { <path d="m5 12.5 4.5 4.5L19 7.5"/> }
        @case ('bank') { <path d="M3 9.5 12 4l9 5.5M5 10v8m4.7-8v8m4.6-8v8M19 10v8M3 20.5h18"/> }
        @case ('grad') { <path d="m12 4 10 5-10 5L2 9l10-5Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/> }
        @case ('eye') { <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/> }
        @case ('plug') { <path d="M9 3v5m6-5v5M6 8h12v3a6 6 0 0 1-12 0V8Zm6 9v4"/> }
        @case ('rocket') { <path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M9 18l-3-3m3 3c5-2 10-7 11-15C12 4 7 9 5 15l4 3Z"/><circle cx="14.5" cy="9.5" r="1.5"/> }
        @case ('chart') { <path d="M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6"/> }
        @case ('zap') { <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/> }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
