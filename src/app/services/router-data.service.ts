import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterDataService {
  private data: { h1: string, h3: string, className: string, routerLink: string };

  get getData() {
    return this.data;
  }

  constructor(private router: Router, route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        route.url.subscribe(() => {
          this.data = route.snapshot.firstChild.data as { h1: string, h3: string, className: string, routerLink: string };
        });
      });
  }
}
