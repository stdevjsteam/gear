import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  data: {h1: string, h3: string, className: string, routerLink: string};

  constructor(route: ActivatedRoute) {
    route.url.subscribe(() => {
      this.data = route.snapshot.data as {h1: string, h3: string, className: string, routerLink: string};
    });
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(40.2013356, 44.5298813),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
