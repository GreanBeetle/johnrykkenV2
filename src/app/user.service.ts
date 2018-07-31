import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

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
    alert('You hit add user');
    this.afs.collection('users').doc(uid).set({'email': email, 'displayName': displayName, 'admin': false});
  }

  retrieveUserName(uid) {
    this.usersCollection.doc(uid).ref.get().then(function(doc) {
      if (doc.exists) {
        alert('retrieveUserName returns this ' + doc.data().displayName);
        return doc.data().displayName;
      } else {
        console.log('no such document');
      }
    })
    .catch(function(error) {
      alert('Error retrieving document:' + error);
    });
  }


}
