import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthModule} from './pages/authorization/auth.module';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { PagePreloaderComponent } from './components/page-preloader/page-preloader.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './pages/filter/filter.component';
import { FilterTableComponent } from './pages/filter-table/filter-table.component';
import {ProfileModule} from './pages/profile/profile.module';
import {CookieService} from 'ngx-cookie-service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagePreloaderComponent,
    HomeComponent,
    FilterComponent,
    FilterTableComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    ProfileModule
  ],
  providers: [
    CookieService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
