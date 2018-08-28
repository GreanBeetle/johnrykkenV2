import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Router, CanActivate } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

    constructor(public userauth: UserAuthService,
                public router: Router) {}

    canActivate(): boolean {
      if ( this.userauth.isJohn === true) {
        console.log('isJohn is true');
        return true;
      } else {
        console.log('canActivates false condition has been met');
        return false;
      }
    }
}
