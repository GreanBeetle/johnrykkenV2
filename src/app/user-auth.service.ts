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
}
