import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {FilterComponent} from './components/pages/filter-pages/filter.component';
import {FilterTableComponent} from './components/pages/filter-pages/filter-table/filter-table.component';
import {PageNotFoundComponent} from './components/pages/page-not-found/page-not-found.component';
import {AboutComponent} from './components/pages/about/about.component';
import {FilterListedComponent} from './components/pages/filter-pages/filter-listed/filter-listed.component';
import {ContactsComponent} from './components/pages/contacts/contacts.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent,
    data: { h1: 'About', h3: 'The Largest Auto Dealer Online', className: 'm-about', routerLink: '/about'}},
  {path: 'contacts', component: ContactsComponent,
    data: { h1: 'Contact Us', h3: 'Get In Touch With Us Now', className: 'm-contacts', routerLink: '/contacts'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: FilterComponent, children: [
      {path: 'filter-table-view', component: FilterTableComponent},
      {path: 'filter-list-view', component: FilterListedComponent},
    ]},
  {path: '', loadChildren: './components/pages/authorization/auth.module#AuthModule'},
  {path: 'blog', loadChildren: './components/pages/blog-pages/blog.module#BlogModule'},
  {path: '', loadChildren: './components/pages/profile/profile.module#ProfileModule'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
