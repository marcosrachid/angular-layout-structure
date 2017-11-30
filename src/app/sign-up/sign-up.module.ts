import { NgModule } from '@angular/core';

import { SignUpComponent } from './';

import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SignUpComponent
  ]
})
export class SignUpModule { }
