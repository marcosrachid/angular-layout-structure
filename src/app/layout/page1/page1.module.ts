import { NgModule } from '@angular/core';

import { Page1Component } from './';

import { SharedModule } from '../../_shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    Page1Component
  ]
})
export class Page1Module { }
