import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
  angularLogo = 'https://cdn-images-1.medium.com/max/1600/1*hDJlAbtIVBrvyau4d8JRLg.png';
  username;

  constructor(public authServ: AuthenticationService,
              private router: Router,
              private userserv: UserService) {
    this.username = this.authServ.username.subscribe(username => {
      this.username = username;
      console.log('navbar username is ', this.username);
    });
    this.authServ.user.subscribe(user => {
      if (user == null) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
        this.user = user;
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
