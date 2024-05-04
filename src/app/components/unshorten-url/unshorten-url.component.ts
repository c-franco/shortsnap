import { Component } from '@angular/core';
import { UrlResponseDTO } from '../../models/dto/url-response.dto';
import { ResultDTO } from '../../models/dto/result.dto';

@Component({
  selector: 'app-unshorten-url',
  templateUrl: './unshorten-url.component.html',
  styleUrl: './unshorten-url.component.css',
})
export class UnshortenUrlComponent {
  longUrl: ResultDTO | undefined;
  currentDomain: string = '';

  showLongUrl(event: UrlResponseDTO) {    
    const fullUrl = window.location.href;
    const url = new URL(fullUrl);
    this.currentDomain = url.origin;

    this.longUrl = {
      lowerUrl: event.longUrl,
      upperUrl: this.currentDomain + '/' + event.shortUrl,
      clickCounter: 0,
    };    
  }
}
