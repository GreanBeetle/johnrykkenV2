import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Router, CanActivate } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    isAdmin: boolean = false;

    constructor(public userauth: UserAuthService,
                public router: Router) {
                  this.isAdmin = this.userauth.isAdmin;
                }

    canActivate(): boolean {
      if (this.isAdmin === false) {
        this.router.navigate(['/']);
      } else if ( this.isAdmin === true) {
        return true;
      } else {
        return false;
      }
    }
}
