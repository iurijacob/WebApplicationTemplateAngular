import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'user/account', component: AccountComponent },
  { path: 'user/profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    AccountComponent,
    ProfileComponent
  ]
})
export class UserRoutingModule { }
