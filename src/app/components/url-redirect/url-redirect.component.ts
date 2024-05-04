import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlShortenerService } from '../../services/url-shortener.service';

@Component({
  selector: 'app-url-redirect',
  templateUrl: './url-redirect.component.html',
  styleUrl: './url-redirect.component.css',
})
export class UrlRedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private urlShortenerService: UrlShortenerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const shortUrl: string = params['shortUrl'];

      this.urlShortenerService.getLongUrl(shortUrl).subscribe((response) => {
        if (response) {
          window.location.href = response.longUrl;
        } else {
          this.router.navigate(['']);
        }
      });
    });
  }
}
