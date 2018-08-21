import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-epicoin',
  templateUrl: './portfolio-epicoin.component.html',
  styleUrls: ['./portfolio-epicoin.component.scss']
})
export class PortfolioEpicoinComponent {

  display = false;

  constructor() { }

  displayType() {
    if ( this.display === true ) {
      return 'block';
    } else if ( this.display === false ) {
      return 'none';
    }
  }

  toggle() {
    if (this.display === false) {
      this.display = true;
    } else {
      this.display = false;
    }
  }

}
