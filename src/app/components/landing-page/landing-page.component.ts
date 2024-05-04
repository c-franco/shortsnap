import { Component } from '@angular/core';
import { UrlDTO } from '../../models/dto/url.dto';
import { UrlResponseDTO } from '../../models/dto/url-response.dto';
import { ResultDTO } from '../../models/dto/result.dto';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  shortenUrl: ResultDTO | undefined;
  currentDomain: string = '';

  showShortUrl(event: UrlResponseDTO) {
    const fullUrl = window.location.href;
    const url = new URL(fullUrl);
    this.currentDomain = url.origin;

    this.shortenUrl = {
      lowerUrl: this.currentDomain + '/' + event.shortUrl,
      upperUrl: event.longUrl,
      clickCounter: 0,
    };
  }
}
