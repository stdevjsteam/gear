import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  isFooterHidden = true;

  constructor(private router: Router, private cookieService: CookieService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.isFooterHidden = urlAfterRedirects === '/';
      });
  }

  ngOnInit() {
  }

}
