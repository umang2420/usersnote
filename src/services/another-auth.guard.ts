import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnotherAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const SessionStorageClear = sessionStorage.length == 0;
    if (SessionStorageClear) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
