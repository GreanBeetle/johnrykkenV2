import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [ AuthenticationService ]
})

export class UserLoginComponent {

  constructor(private authServ: AuthenticationService, private router: Router) { }

  googleLogin() {
    this.authServ.googleLogin().then((res) => {
      this.router.navigate(['/']);
    }).catch((err) =>
      console.log('Google login error: ' + err));
  }

  githubLogin() {
    this.authServ.githubLogin().then((res) => {
      this.router.navigate(['/']);
    }).catch((err) =>
      console.log('Github login error: ' + err));
  }

  logout() {
    this.authServ.logout();
  }

}
