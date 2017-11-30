import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';

import { AppGuard } from '../../_shared';

const routes: Routes = [
  { path: '', component: Page1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1Routes { }
