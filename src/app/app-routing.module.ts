import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlRedirectComponent } from './components/url-redirect/url-redirect.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UnshortenUrlComponent } from './components/unshorten-url/unshorten-url.component';
import { UrlClickCounterComponent } from './components/url-click-counter/url-click-counter.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'unshorten-url', component: UnshortenUrlComponent },
  { path: 'stats', component: UrlClickCounterComponent },
  { path: 'stats/:data', component: UrlClickCounterComponent },
  { path: ':shortUrl', component: UrlRedirectComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
