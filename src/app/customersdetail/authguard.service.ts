import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return true;
  }

}
