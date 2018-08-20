import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-west-oaks',
  templateUrl: './portfolio-west-oaks.component.html',
  styleUrls: ['./portfolio-west-oaks.component.scss']
})

export class PortfolioWestOaksComponent {

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
