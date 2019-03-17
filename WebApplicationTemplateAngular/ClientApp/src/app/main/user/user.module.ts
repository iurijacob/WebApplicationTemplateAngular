import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ],

})
export class UserModule { }
