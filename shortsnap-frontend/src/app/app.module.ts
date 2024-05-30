import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlFormComponent } from './components/url-form/url-form.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UrlRedirectComponent } from './components/url-redirect/url-redirect.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { UnshortenUrlComponent } from './components/unshorten-url/unshorten-url.component';
import { UrlClickCounterComponent } from './components/url-click-counter/url-click-counter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { UrlResultComponent } from './components/url-result/url-result.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlFormComponent,
    UrlRedirectComponent,
    LandingPageComponent,
    MenuComponent,
    UnshortenUrlComponent,
    UrlClickCounterComponent,
    PageTitleComponent,
    UrlResultComponent,
    InfoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
