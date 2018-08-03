import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
    this.users = this.usersCollection.valueChanges();
   }

  addUser(uid, email, displayName) {
    this.afs.collection('users').doc(uid).set({'email': email, 'displayName': displayName, 'admin': false});
  }

  // this.usersCollection.doc(uid).valueChanges().subscribe(value => {
  //   this.username = value.displayName;
  // });



}
