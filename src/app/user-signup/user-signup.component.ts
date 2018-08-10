import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MessageService } from 'primeng/api';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
  providers: [ UserAuthService,
               MessageService ]
})
export class UserSignupComponent implements OnInit {

  constructor(private authservice: AuthenticationService,
              private toast: MessageService,
              private userauth: UserAuthService) { }

  signup(displayname, email, password) {
    this.userauth.createUser(displayname, email, password);
    this.showToast(displayname);
  }

  showToast(username) {
    this.toast.add({
      severity: 'success',
      summary: `Account for ${username} successfully created`,
      life: 4000
    });
  }

  ngOnInit() {
  }

}
