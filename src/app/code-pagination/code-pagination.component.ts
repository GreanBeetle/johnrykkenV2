import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-pagination',
  templateUrl: './code-pagination.component.html',
  styleUrls: ['./code-pagination.component.scss']
})
export class CodePaginationComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd', 'e', 'f', 'g'];

  constructor() { }

  ngOnInit() {
  }

}
