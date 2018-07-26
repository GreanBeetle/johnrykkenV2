import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  loggedIn = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
    this.user = afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );

  }

  googleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        });
      this.loggedIn = true;
    });
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/']));
    this.loggedIn = false;
  }

  // #### return to github authentication if there is time
  githubLogin() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }
  // #### end github authentication

}
