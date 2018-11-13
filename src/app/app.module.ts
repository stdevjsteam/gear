import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {PagePreloaderComponent} from './components/page-preloader/page-preloader.component';
import {HomeComponent} from './components/pages/home/home.component';
import {FilterComponent} from './components/pages/filter-pages/filter.component';
import {FilterTableComponent} from './components/pages/filter-pages/filter-table/filter-table.component';
import {CookieService} from 'ngx-cookie-service';
import {PageNotFoundComponent} from './components/pages/page-not-found/page-not-found.component';
import {AboutComponent} from './components/pages/about/about.component';
import {SharedModule} from '../shared/modules/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopSliderComponent } from './components/pages/home/top-slider/top-slider.component';
import { SearchSectionComponent } from './components/pages/home/search-section/search-section.component';
import { VehicleTypeComponent } from './components/pages/home/search-section/vehicle-type/vehicle-type.component';
import {UiModule} from '../shared/search-section-svgs/ui.module';
import { AdvancedSearchComponent } from './components/pages/home/search-section/advanced-search/advanced-search.component';
import { TopVehiclesComponent } from './components/pages/home/top-vehicles/top-vehicles.component';
import { UrgentSaleComponent } from './components/pages/home/urgent-sale/urgent-sale.component';
import { CarouselItemComponent } from './components/pages/home/carousel-item/carousel-item.component';
import {NguCarouselModule} from '@ngu/carousel';
import { FilterListedComponent } from './components/pages/filter-pages/filter-listed/filter-listed.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../directives/directive.module';
import {NgSelectModule} from '@ng-select/ng-select';
import { SelectComponent } from './components/ui/select/select.component';
import { RangeSliderComponent } from './components/ui/range-slider/range-slider.component';
import {MyTranslateRootModule} from '../shared/modules/my-translate-root.module';

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
    ContactsComponent,
    SelectComponent,
    RangeSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    Ng5SliderModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    UiModule,
    NguCarouselModule,
    MatExpansionModule,
    DirectiveModule,
    MyTranslateRootModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, multi: true
    }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
