import { Component } from '@angular/core';
import { UrlResponseDTO } from '../../models/dto/url-response.dto';
import { ResultDTO } from '../../models/dto/result.dto';
import { ActivatedRoute } from '@angular/router';
import { UrlShortenerService } from '../../services/url-shortener.service';

@Component({
  selector: 'app-url-click-counter',
  templateUrl: './url-click-counter.component.html',
  styleUrl: './url-click-counter.component.css',
})
export class UrlClickCounterComponent {
  statsUrl: ResultDTO | undefined;
  currentDomain: string = '';
  inputUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private urlShotenerService: UrlShortenerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.inputUrl = params['data'];
    });

    if (this.inputUrl) {
      const shortUrl = new URL(this.inputUrl);
      const pathname = shortUrl.pathname.slice(1);

      this.urlShotenerService
        .getUrlInfo(pathname)
        .subscribe((response) => {
          const url: UrlResponseDTO = {
            longUrl: response.longUrl,
            shortUrl: response.shortUrl,
            clickCounter: response.clickCounter,
          };
          this.showStats(url);
        });
    }
  }

  showStats(event: UrlResponseDTO) {
    const fullUrl = window.location.href;
    const url = new URL(fullUrl);
    this.currentDomain = url.origin;

    this.statsUrl = {
      lowerUrl: this.currentDomain + '/' + event.shortUrl,
      upperUrl: event.longUrl,
      clickCounter: event.clickCounter,
    };
  }
}
