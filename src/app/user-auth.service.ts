import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore) {
                this.usersCollection = this.afs.collection('users');
                this.users = this.usersCollection.valueChanges();
                this.user = afAuth.authState;
              }

  // ###################### AUTHENTICATION ######################
  createUser(displayName, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then( response => {
        const id = response.user.uid;
        this.addUser(id, email, displayName);
    }).catch((err) => {
        alert(err);
    });
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then( response => {
        console.log('User ID is: ' + response.user.uid);
    }).catch((err) => {
        alert(err);
    });
    this.router.navigate(['/']);
  }

  logout() {
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }

  resetPassword(email: string) {
    const auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
               .then(() => console.log('email sent!'))
               .catch((error) => alert(error));
  }
  // ###################### AUTHENTICATION ######################


  // ###################### FIRESTORE USERS COLLECTION ######################
  addUser(uid, email, displayName) {
    this.afs.collection('users').doc(uid).set({
        'email': email,
        'displayName': displayName,
        'admin': false});
  }
  // ###################### FIRESTORE USERS COLLECTION ######################



}
