import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserModule } from './user/user.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ]
})
export class MainModule { }
