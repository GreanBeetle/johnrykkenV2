import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-film-fanatic',
  templateUrl: './portfolio-film-fanatic.component.html',
  styleUrls: ['./portfolio-film-fanatic.component.scss']
})
export class PortfolioFilmFanaticComponent {

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
