import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MessageService } from 'primeng/api';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [ AuthenticationService, MessageService, UserAuthService ]
})

export class UserLoginComponent {
  isActive = 'modal';
  constructor(private authServ: AuthenticationService,
              private router: Router,
              private toast: MessageService,
              private userauth: UserAuthService) { }

  // done!
  login(email, password) {
    this.userauth.login(email, password);
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

  sendPasswordResetEmail(email) {
    this.authServ.resetPassword(email);
  }

  showToast(email) {
    let msg;
    if (email === '') {
      msg = 'Please enter a valid email address.';
    } else {
      msg = `A password reset email was sent to ${email}`;
    }
    this.toast.add({
      severity: 'success',
      summary: msg,
      life: 3000
    });
  }

}
