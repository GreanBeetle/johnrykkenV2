import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-tao-oregon',
  templateUrl: './portfolio-tao-oregon.component.html',
  styleUrls: ['./portfolio-tao-oregon.component.scss']
})
export class PortfolioTaoOregonComponent {
  display = true;

  constructor() { }


  aFunction() {
    return 'red';
  }

  displayType() {
    if ( this.display === true ) {
      return 'block';
    } else if ( this.display === false ) {
      return 'none';
    }
  }

  toggleDisplay() {
    alert('clicked');
    if (this.display === false) {
      this.display = true;
    } else {
      this.display = false;
    }
  }

}
