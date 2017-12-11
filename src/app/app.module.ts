import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  LayoutModule,
  NotFoundModule,
  SignInModule,
  SignUpModule,
  SharedModule,
  AppGuard
} from './';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    NotFoundModule,
    SignInModule,
    SignUpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
