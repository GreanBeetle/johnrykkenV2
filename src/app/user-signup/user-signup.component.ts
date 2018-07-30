import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  constructor(private authservice: AuthenticationService) { }

  signup(displayname, email, password) {
    console.log('User signup displayname: ' + displayname + ' email: ' + email + ' password: ' + password);
    this.authservice.createUser(displayname, email, password);
  }

  ngOnInit() {
  }

}
