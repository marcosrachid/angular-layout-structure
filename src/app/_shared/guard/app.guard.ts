import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
      if (localStorage.getItem('access_token')) {
        return true;
      }
      this.router.navigate(['/sign-in']);
      return false;
  }
}
