import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  Page1Module,
  Page2Module,
  Page3Module,
  LayoutComponent,
  HeaderComponent,
  FooterComponent
} from './';

import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    Page1Module,
    Page2Module,
    Page3Module
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutModule { }
