import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OwnAddsComponent} from './own-adds/own-adds.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {AccountInformationComponent} from './account-information/account-information.component';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {SharedModule} from '../../../../shared/modules/shared.module';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      {path: 'account-information',
        component: AccountInformationComponent,
        data: { h1: 'Account information',
          h3: 'Manage your account information',
          className: 'm-contacts',
          routerLink: '/account-information'}
        },
      {path: 'own-adds',
        component: OwnAddsComponent,
        data: { h1: 'Own Adds', h3: 'Manage your adds', className: 'm-listingsTwo', routerLink: '/own-adds'}
        },
      {path: 'favourites',
        component: FavouritesComponent,
        data: { h1: 'Favourites', className: 'm-listingsTwo', routerLink: '/favourites'}
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccountInformationComponent,
    FavouritesComponent,
    OwnAddsComponent,
    ProfileComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProfileModule {
}
