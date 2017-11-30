import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3Component } from './page3.component';

import { AppGuard } from '../../_shared';

const routes: Routes = [
  { path: 'page3', component: Page3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page3Routes { }
