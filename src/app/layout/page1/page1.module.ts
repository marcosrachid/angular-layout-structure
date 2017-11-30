import { NgModule } from '@angular/core';

import { Page1Component } from './page1.component';
import { Page1Routes } from './page1-routing.module';
import { SharedModule } from '../../_shared';

@NgModule({
  imports: [
    SharedModule,
    Page1Routes
  ],
  declarations: [
    Page1Component
  ]
})
export class Page1Module { }
