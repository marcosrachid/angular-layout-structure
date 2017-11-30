import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3Component } from './';

import { AppGuard } from '../../_shared';

export const Page3Routes: Routes = [
  { path: 'page3', component: Page3Component, canActivate: [ AppGuard ] }
];
