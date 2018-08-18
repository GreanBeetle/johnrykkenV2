import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserAuthService } from '../user-auth.service';
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
    UserService,
    UserAuthService
  ]
})

export class NavbarComponent {
  user;
  loggedIn;
  showMenu = false;
  public get username(): string {
    return this.userauth.username;
  }

  constructor(public authServ: AuthenticationService,
              private router: Router,
              private userserv: UserService,
              private afs: AngularFirestore,
              private userauth: UserAuthService) {
    this.userauth.user.subscribe(user => {
      if (user == null) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
        this.user = user;
      }
    });
  }

  logout() {
    this.userauth.logout();
    this.user = null;
  }

  toggleMenu() {
    if (this.showMenu === false) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }

}
