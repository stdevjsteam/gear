import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent implements OnInit {
  @Input() data: {h1: string, h3: string, className: string, routerLink: string};

constructor() {}

  ngOnInit() {
  }

}
