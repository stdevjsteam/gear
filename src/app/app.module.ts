import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthModule} from './pages/authorization/auth.module';
import {UserModule} from './modules/user.module';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { PagePreloaderComponent } from './components/page-preloader/page-preloader.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagePreloaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    UserModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
