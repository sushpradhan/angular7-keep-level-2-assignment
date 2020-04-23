import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService}   from './services/authentication.service'
import {RouterService}  from './services/router.service'

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
    private routeService: RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('inside Authentication gaurd');
        const promise = 
        this.authService.isUserAuthenticated(this.authService.getBearerToken());
        console.log('guard',promise);
        return promise.then(res =>{
          console.log('inside guard', res);
          if(!res){
            this.routeService.routeToLogin();
          }
          return res;
        })
}
}
