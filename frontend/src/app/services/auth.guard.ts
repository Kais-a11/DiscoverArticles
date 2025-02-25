import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router) {
  }

  canActivate(){
    if(this.auth.islogged())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login'])
      return false;
    }
  }
}

