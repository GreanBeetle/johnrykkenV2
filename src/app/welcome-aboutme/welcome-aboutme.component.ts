import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-aboutme',
  templateUrl: './welcome-aboutme.component.html',
  styleUrls: ['./welcome-aboutme.component.scss']
})
export class WelcomeAboutmeComponent implements OnInit {
  month: string;
  year: number;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    const monthNames = ['January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                      ];
    this.month = monthNames[date.getMonth()];
    this.year = date.getFullYear();
  }

}
