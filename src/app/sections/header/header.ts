import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  protected readonly themeService = inject(ThemeService);
  protected readonly nav = [
    { label: 'Experience', href: '#experience' },
    { label: 'WordNest', href: '#wordnest' },
    { label: 'Work projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];
}
