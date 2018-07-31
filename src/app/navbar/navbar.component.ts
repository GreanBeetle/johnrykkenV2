import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    AuthenticationService,
    UserService
  ]
})

export class NavbarComponent implements OnInit {
  user;
  loggedIn;
  showMenu = false;
  username;

  constructor(public authServ: AuthenticationService,
              private router: Router,
              private userserv: UserService,
              private afs: AngularFirestore) {
    this.authServ.user.subscribe(user => {
      if (user == null) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
        this.user = user;
        this.afs.collection('users').doc(`${user.uid}`).ref.get().then((doc) => {
          this.username = doc.data().displayName;
        });
      }
    });
  }

  logout() {
    this.authServ.logout();
    this.user = null;
  }

  toggleMenu() {
    if (this.showMenu === false) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }

  ngOnInit() {
  }

}
