import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  isFooterHidden = true;

  constructor(private router: Router, private authService: AuthorizationService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.isFooterHidden = urlAfterRedirects === '/';
      });
  }

  ngOnInit() {
  }

  animate(elem: HTMLElement, style: string, unit: string, from: number, to: number, time: number, prop: boolean): void {
    if (elem) {
      const start = new Date().getTime(),
        timer = setInterval((): void => {
          const step = Math.min(1, (new Date().getTime() - start) / time);
          if (prop) {
            elem[style] = (from + step * (to - from)) + unit;
          } else {
            elem.style[style] = (from + step * (to - from)) + unit;
          }
          if (step === 1) {
            clearInterval(timer);
          }
        }, 5);
      if (prop) {
        elem[style] = from + unit;
      } else {
        elem.style[style] = from + unit;
      }
    }
  }

  goToTop() {
    this.animate(document.documentElement, 'scrollTop', '', document.documentElement.scrollTop, document.body.offsetTop, 500, true);
  }

}
