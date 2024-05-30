import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { UrlResponseDTO } from '../models/dto/url-response.dto';
import { UrlDTO } from '../models/dto/url.dto';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private apiUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  createShortUrl(url: UrlDTO): Observable<UrlResponseDTO> {
    return this.httpClient.post<UrlResponseDTO>(
      `${this.apiUrl}/shortener`,
      url
    );
  }

  getLongUrl(shortUrl: string): Observable<UrlDTO> {
    return this.httpClient.get<UrlDTO>(`${this.apiUrl}/${shortUrl}`);
  }

  getUrlInfo(shortUrl: string): Observable<UrlDTO> {
    return this.httpClient.get<UrlDTO>(`${this.apiUrl}/urlinfo/${shortUrl}`);
  }
}
