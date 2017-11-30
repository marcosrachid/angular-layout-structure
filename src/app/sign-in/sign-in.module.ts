import { NgModule } from '@angular/core';

import { SignInComponent } from './';

import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule { }
