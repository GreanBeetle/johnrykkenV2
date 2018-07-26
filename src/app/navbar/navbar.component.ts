import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    AuthenticationService
  ]
})

export class NavbarComponent implements OnInit {
  user;
  loggedIn;
  showMenu = false;
  angularLogo = 'https://cdn-images-1.medium.com/max/1600/1*hDJlAbtIVBrvyau4d8JRLg.png';

  constructor(public authServ: AuthenticationService, private router: Router) {
    this.authServ.user.subscribe(theUser => {
        this.user = theUser;
        if (theUser == null) {
          this.loggedIn = false;
          console.log ('User is null: ' + theUser + ' and here is the loggedIn var: ' + this.loggedIn);
        } else {
          this.loggedIn = true;
          console.log ('User is true: ' + theUser.email + ' and here is the loggedIn var: ' + this.loggedIn);
        }
    });
  }

  logout() {
    this.authServ.logout();
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
