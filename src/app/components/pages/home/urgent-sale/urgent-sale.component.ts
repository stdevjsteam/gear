import { Component, OnInit } from '@angular/core';
import {Carousel} from '../../../../../shared/carousel';

@Component({
  selector: 'app-urgent-sale',
  templateUrl: './urgent-sale.component.html'
})
export class UrgentSaleComponent extends Carousel implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
