import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { SignInRoutes } from './sign-in-routing.module';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    SignInRoutes
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule { }
