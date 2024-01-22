import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate():boolean
    {
    const loginUserData = JSON.parse(sessionStorage.getItem('loginData')||"");
    if (loginUserData) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

