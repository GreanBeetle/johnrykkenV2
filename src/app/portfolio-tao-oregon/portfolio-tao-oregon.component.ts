import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-tao-oregon',
  templateUrl: './portfolio-tao-oregon.component.html',
  styleUrls: ['./portfolio-tao-oregon.component.scss']
})

export class PortfolioTaoOregonComponent {
  display = true;

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
