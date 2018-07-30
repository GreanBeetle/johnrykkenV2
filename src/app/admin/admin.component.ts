import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ UserService ]
})

export class AdminComponent implements OnInit {
  users;

  constructor(private userServ: UserService) {
    this.users = this.userServ.users;
  }

  ngOnInit() {
  }

}
