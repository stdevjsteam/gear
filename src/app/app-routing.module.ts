import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FilterComponent} from './pages/filter/filter.component';
import {FilterTableComponent} from './pages/filter-table/filter-table.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'filter-table', component: FilterTableComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', loadChildren: './pages/authorization/auth.module#AuthModule'},
  {path: '', loadChildren: './pages/profile/profile.module#ProfileModule'},
  { path: '**', redirectTo: 'error-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
