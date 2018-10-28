import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {PagePreloaderComponent} from './components/page-preloader/page-preloader.component';
import {HomeComponent} from './pages/home/home.component';
import {FilterComponent} from './pages/filter-pages/filter.component';
import {FilterTableComponent} from './pages/filter-pages/filter-table/filter-table.component';
import {CookieService} from 'ngx-cookie-service';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AboutComponent} from './pages/about/about.component';
import {SharedModule} from '../shared/modules/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopSliderComponent } from './pages/home/top-slider/top-slider.component';
import { SearchSectionComponent } from './pages/home/search-section/search-section.component';
import { VehicleTypeComponent } from './pages/home/search-section/vehicle-type/vehicle-type.component';
import {UiModule} from '../shared/search-section-svgs/ui.module';
import { AdvancedSearchComponent } from './pages/home/search-section/advanced-search/advanced-search.component';
import { TopVehiclesComponent } from './pages/home/top-vehicles/top-vehicles.component';
import { UrgentSaleComponent } from './pages/home/urgent-sale/urgent-sale.component';
import { CarouselItemComponent } from './pages/home/carousel-item/carousel-item.component';
import {NguCarouselModule} from '@ngu/carousel';
import { FilterListedComponent } from './pages/filter-pages/filter-listed/filter-listed.component';

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
    AboutComponent,
    TopSliderComponent,
    SearchSectionComponent,
    VehicleTypeComponent,
    AdvancedSearchComponent,
    TopVehiclesComponent,
    UrgentSaleComponent,
    CarouselItemComponent,
    FilterListedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    UiModule,
    NguCarouselModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
