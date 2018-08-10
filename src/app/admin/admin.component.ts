import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ UserAuthService ]
})

export class AdminComponent {
  users;

  constructor(private userauth: UserAuthService) {
    this.users = this.userauth.users;
  }
}
