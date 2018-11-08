import { Component, OnInit } from '@angular/core';
import {Carousel} from '../../../../../shared/carousel';

@Component({
  selector: 'app-top-vehicles',
  templateUrl: './top-vehicles.component.html'
})
export class TopVehiclesComponent extends Carousel implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {}

}
