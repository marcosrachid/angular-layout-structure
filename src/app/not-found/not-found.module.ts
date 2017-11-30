import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutes } from './not-found-routing.module';
import { SharedModule } from '../_shared';

@NgModule({
  imports: [
    SharedModule,
    NotFoundRoutes
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
