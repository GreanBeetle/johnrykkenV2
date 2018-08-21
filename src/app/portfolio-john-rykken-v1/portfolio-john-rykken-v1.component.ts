import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-john-rykken-v1',
  templateUrl: './portfolio-john-rykken-v1.component.html',
  styleUrls: ['./portfolio-john-rykken-v1.component.scss']
})
export class PortfolioJohnRykkenV1Component {

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
