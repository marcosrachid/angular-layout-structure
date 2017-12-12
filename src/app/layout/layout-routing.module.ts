import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppGuard } from '../_shared';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AppGuard ],
    // canActivateChild: [ AppGuard ],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './page1/page1.module#Page1Module' },
      { path: 'page2', loadChildren: './page2/page2.module#Page2Module' },
      { path: 'page3', loadChildren: './page3/page3.module#Page3Module' }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutes {}
