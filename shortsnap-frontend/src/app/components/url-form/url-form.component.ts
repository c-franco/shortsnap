import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UrlShortenerService } from '../../services/url-shortener.service';
import { UrlDTO } from '../../models/dto/url.dto';
import { UrlResponseDTO } from '../../models/dto/url-response.dto';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrl: './url-form.component.css',
})
export class UrlFormComponent implements OnInit {
  @Input() action: string = '';
  @Output() OnSubmit: EventEmitter<UrlResponseDTO> =
    new EventEmitter<UrlResponseDTO>();

  form: FormGroup = new FormGroup({});
  @Input() inputUrl: string = '';

  buttonText: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private urlShotenerService: UrlShortenerService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      url: ['', { validators: [Validators.required] }],
    });

    if (this.action == 'shorten') {
      this.buttonText = 'Shorten URL';
    } else if (this.action == 'unshorten') {
      this.buttonText = 'Unshorten URL';
    } else if (this.action == 'stats') {
      this.buttonText = 'View Clicks';
    }
  }

  onSubmit(url: UrlDTO) {
    if (this.action == 'shorten') {
      this.shortenUrl(url);
    } else if (this.action == 'unshorten') {
      this.getUrlInfo(url);
    } else if (this.action == 'stats') {
      this.getUrlInfo(url);
    }
  }

  shortenUrl(url: UrlDTO) {
    if (this.inputUrl) {
      url.shortUrl = '';
      url.longUrl = this.inputUrl;
      this.urlShotenerService.createShortUrl(url).subscribe((response) => {
        if (response) {
          this.OnSubmit.emit(response);
        }
      });
    }
  }

  getUrlInfo(url: UrlDTO) {
    const shortUrl = new URL(this.inputUrl);
    const pathname = shortUrl.pathname.slice(1);

    this.urlShotenerService.getUrlInfo(pathname).subscribe((response) => {
      if (response) {
        this.OnSubmit.emit(response);
      }
    });
  }
}
