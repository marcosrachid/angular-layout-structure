import { NgModule } from '@angular/core';

import { Page2Component } from './page2.component';
import { Page2Routes } from './page2-routing.module';
import { SharedModule } from '../../_shared';

@NgModule({
  imports: [
    SharedModule,
    Page2Routes
  ],
  declarations: [
    Page2Component
  ]
})
export class Page2Module { }
