import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FilterComponent} from './pages/filter-pages/filter/filter.component';
import {FilterTableComponent} from './pages/filter-pages/filter-table/filter-table.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AboutComponent} from './pages/about/about.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent,
    data: { h1: 'About', h3: 'The Largest Auto Dealer Online', className: 'm-about', routerLink: '/about'}},
  {path: 'filter', component: FilterComponent},
  {path: 'filter-table', component: FilterTableComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', loadChildren: './pages/authorization/auth.module#AuthModule'},
  {path: '', loadChildren: './pages/profile/profile.module#ProfileModule'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
