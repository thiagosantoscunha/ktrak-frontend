import { AuthService } from 'src/app/security/auth.service';
import { CanLoad, Route, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(private authService: AuthService) {
  }

  canLoad(route: Route): boolean {
    const loggedin = this.authService.isLogged();
    if (!loggedin) {
      this.authService.handleLogin();
    }
    return false;
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return false;
  }

}
