import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  data: {h1: string, h3: string, className: string, routerLink: string};

  constructor(route: ActivatedRoute) {
    route.url.subscribe(() => {
      this.data = route.snapshot.data as {h1: string, h3: string, className: string, routerLink: string};
    });
  }

  ngOnInit() {
  }

}
