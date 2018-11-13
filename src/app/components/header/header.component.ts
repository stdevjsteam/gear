import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit {
  private navbar: HTMLElement;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.navbar = document.querySelector('.navbar-main-slide > .navbar-nav-menu > .dropdown');
    this.navbar.addEventListener('mouseenter', this.onMouseEnter);
    this.navbar.addEventListener('mouseleave', this.onMouseLeave);
  }

  signOut() {
    this.router.navigate(['/sign-in']);
  }

  onMouseEnter = () => {
    if (window.innerWidth > 798) {
      console.log('asdas');
      this.navbar.classList.add('open');
    }
  };

  onMouseLeave = () => {
    if (window.innerWidth > 798) {
      console.log('bffbfbfbb');
      this.navbar.classList.remove('open');
    }
  };

}
