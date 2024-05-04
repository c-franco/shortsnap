import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css',
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';

  isBlueWord(word: string): boolean {
    const blueWords = ['short', 'links', 'destination', 'page.', 'clicks'];
    return blueWords.includes(word);
  }
}
