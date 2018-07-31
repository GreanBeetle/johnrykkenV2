import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UserService } from './user.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: Observable<firebase.User>;
  userdetails: AngularFirestoreDocument<User>;
  username;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              public userService: UserService,
              private afs: AngularFirestore ) {
                this.user = afAuth.authState;
                this.usersCollection = this.afs.collection('users');
                this.users = this.usersCollection.valueChanges();
                this.user.subscribe(user => {
                  if (user !== null) {
                    this.usersCollection.doc(`${user.uid}`).ref.get().then((doc) => {
                      if (doc.exists) {
                        this.username = doc.data().displayName;
                        console.log('username ', this.username);
                      } else {
                        this.username = null;
                        console.log('No such document');
                      }
                    });
                  }
                });

              }

  createUser(displayName, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( response => {
            const id = response.user.uid;
            this.userService.addUser(id, email, displayName);
        })
        .catch((err) => {
            alert(err);
        });
    this.router.navigate(['/']);
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( response => {
        console.log('User ID is: ' + response.user.uid);
      })
      .catch((err) => {
        alert(err);
      });
    this.router.navigate(['/']);
  }

  logout() {
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }

  // ####################
  // google login works but is not used
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
    });
  }
  // end google login
  // ####################

}
