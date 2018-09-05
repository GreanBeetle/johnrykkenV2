import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Router, CanActivate } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// ##### hastily added code REVISE THIS #####
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    user: Observable<firebase.User>;
    public admin: boolean;

    constructor(public userauth: UserAuthService,
                public router: Router,
                public afAuth: AngularFireAuth) { this.user = afAuth.authState; }

    canActivate(): boolean {
      if (this.userauth.isAdmin === true) {
        alert('userauth isAdmin is true');
        return true;
      } else {
        alert('you hit the else condition');
        return false;
      }
    }
}
