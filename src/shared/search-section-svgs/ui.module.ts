import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupComponent } from './pickup/pickup.component';
import { SuvComponent } from './suv/suv.component';
import { CoupeComponent } from './coupe/coupe.component';
import { ConvertibleComponent } from './convertible/convertible.component';
import { SedanComponent } from './sedan/sedan.component';
import { MinicarComponent } from './minicar/minicar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PickupComponent,
    SuvComponent,
    CoupeComponent,
    ConvertibleComponent,
    SedanComponent,
    MinicarComponent,
  ],
  exports: [
    PickupComponent,
    SuvComponent,
    CoupeComponent,
    ConvertibleComponent,
    SedanComponent,
    MinicarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiModule { }
