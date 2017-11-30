import { NgModule } from '@angular/core';

import { Page3Component } from './page3.component';
import { Page3Routes } from './page3-routing.module';
import { SharedModule } from '../../_shared';

@NgModule({
  imports: [
    SharedModule,
    Page3Routes
  ],
  declarations: [
    Page3Component
  ]
})
export class Page3Module { }
