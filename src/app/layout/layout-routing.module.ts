import { Routes } from '@angular/router';

import {
  Page1Routes,
  Page2Routes,
  Page3Routes
} from './';

import { LayoutComponent } from './';

export const LayoutRoutes: Routes = [
  ...Page1Routes,
  ...Page2Routes,
  ...Page3Routes
];
