import { Component, Input, OnInit } from '@angular/core';
import { UrlResponseDTO } from '../../models/dto/url-response.dto';
import { ResultDTO } from '../../models/dto/result.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-result',
  templateUrl: './url-result.component.html',
  styleUrl: './url-result.component.css',
})
export class UrlResultComponent implements OnInit {
  @Input() urlResponseDto: ResultDTO | any;
  @Input() stats: boolean = false;
  @Input() unshort: boolean = false;

  copied: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  copyToClipboard(data: string): void {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      })
      .catch((err) => {});
  }

  redirectToStats(data: string) {
    this.router.navigate(['/stats', data]);
  }
}
