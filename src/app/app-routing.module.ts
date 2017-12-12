import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule'},
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInModule'},
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule'},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
