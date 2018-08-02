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
  isActive = 'modal';
  constructor(private authServ: AuthenticationService, private router: Router) { }

  login(email, password) {
    this.authServ.login(email, password);
  }

  logout() {
    this.authServ.logout();
  }

  forgotPassword() {
    if (this.isActive === 'modal') {
      this.isActive = 'modal is-active';
    } else {
      this.isActive = 'modal';
    }
  }

  googleLogin() {
    this.authServ.googleLogin().then((res) => {
      this.router.navigate(['/']);
    }).catch((err) =>
      console.log('Google login error: ' + err));
  }


}
