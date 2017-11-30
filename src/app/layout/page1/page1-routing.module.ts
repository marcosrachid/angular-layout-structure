import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './';

import { AppGuard } from '../../_shared';

export const Page1Routes: Routes = [
  { path: '', component: Page1Component, canActivate: [ AppGuard ] }
];
