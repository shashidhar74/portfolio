import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly profile = PROFILE;
}
