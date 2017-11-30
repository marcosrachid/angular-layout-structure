import { NgModule } from '@angular/core';

import { NotFoundComponent } from './';

import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
