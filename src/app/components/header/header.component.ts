import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {navBarCollapse} from '../../../shared/animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: navBarCollapse
})
export class HeaderComponent implements AfterViewInit {
  private navbar: Element;
  menuIsOpened = false;
  profileIsOpened = false;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.navbar = document.querySelectorAll('.navbar-main-slide > .navbar-nav-menu > .dropdown').item(1);
    this.navbar.addEventListener('mouseenter', this.onMouseEnter);
    this.navbar.addEventListener('mouseleave', this.onMouseLeave);
  }

  signOut() {
    this.router.navigate(['/sign-in']);
  }

  onMouseEnter = () => {
    if (window.innerWidth > 798) {
      this.navbar.classList.add('open');
    }
  };

  onMouseLeave = () => {
    if (window.innerWidth > 798) {
      this.navbar.classList.remove('open');
    }
  };

  toggleMenu() {
    if (this.menuIsOpened) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu(): void {
    this.menuIsOpened = true;
  }

  closeMenu(): void {
    this.menuIsOpened = false;
  }

  logOut() {
    this.closeMenu();
    this.router.navigate(['/login']);
  }


}
