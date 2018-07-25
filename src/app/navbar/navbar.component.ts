import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ AuthenticationService ]
})

export class NavbarComponent implements OnInit {
  user;
  private isLoggedIn: boolean;

  constructor(public authServ: AuthenticationService, private router: Router) {
    this.authServ.user.subscribe(user => {
        this.user = user;
        console.log('ID and display name: ' + user.uid + user.displayName);
        if (user == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
    });
  }

  logout() {
    this.authServ.logout();
  }

  ngOnInit() {
  }

}
