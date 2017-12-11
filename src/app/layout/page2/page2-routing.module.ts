import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Component } from './page2.component';

import { AppGuard } from '../../_shared';

const routes: Routes = [
  { path: '', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2Routes { }
