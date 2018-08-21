import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-fomo-church',
  templateUrl: './portfolio-fomo-church.component.html',
  styleUrls: ['./portfolio-fomo-church.component.scss']
})
export class PortfolioFomoChurchComponent {

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
