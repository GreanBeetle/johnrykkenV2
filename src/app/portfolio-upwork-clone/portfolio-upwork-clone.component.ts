import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-upwork-clone',
  templateUrl: './portfolio-upwork-clone.component.html',
  styleUrls: ['./portfolio-upwork-clone.component.scss']
})
export class PortfolioUpworkCloneComponent {

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
