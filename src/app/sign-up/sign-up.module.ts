import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up.component';
import { SignUpRoutes } from './sign-up-routing.module';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    SignUpRoutes
  ],
  declarations: [
    SignUpComponent
  ]
})
export class SignUpModule { }
