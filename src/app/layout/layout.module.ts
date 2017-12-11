import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LayoutComponent } from './layout.component';
import {
  HeaderComponent,
  FooterComponent
} from './components';
import { LayoutRoutes } from './layout-routing.module';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutes
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
