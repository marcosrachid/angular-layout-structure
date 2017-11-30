import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LayoutRoutes,
  SignInRoutes,
  SignUpRoutes,
  NotFoundRoutes
} from './';

import { AppComponent } from './app.component';

const routes: Routes = [
  ...LayoutRoutes,
  ...SignInRoutes,
  ...SignUpRoutes,
  ...NotFoundRoutes,
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
