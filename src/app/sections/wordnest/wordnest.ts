import { Component } from '@angular/core';
import { WORDNEST } from '../../data/portfolio.data';

@Component({
  selector: 'app-wordnest',
  templateUrl: './wordnest.html',
})
export class Wordnest {
  protected readonly wn = WORDNEST;
}
