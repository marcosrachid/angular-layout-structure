import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Component } from './';

import { AppGuard } from '../../_shared';

export const Page2Routes: Routes = [
  { path: '/page2', component: Page2Component, canActivate: [ AppGuard ] }
];
