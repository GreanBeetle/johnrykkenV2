import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-bianchi-brew',
  templateUrl: './portfolio-bianchi-brew.component.html',
  styleUrls: ['./portfolio-bianchi-brew.component.scss']
})

export class PortfolioBianchiBrewComponent {

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
