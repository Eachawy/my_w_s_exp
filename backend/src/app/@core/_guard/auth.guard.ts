import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthonService } from '../../@core/services/authon/authon.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private Authon: AuthonService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.Authon.getuserloggedin()){
      this.router.navigate(['login']);
    }
    return this.Authon.getuserloggedin(); 
  }
}
