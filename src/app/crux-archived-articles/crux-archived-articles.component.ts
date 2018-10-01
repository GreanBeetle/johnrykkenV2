import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-crux-archived-articles',
  templateUrl: './crux-archived-articles.component.html',
  styleUrls: ['./crux-archived-articles.component.scss']
})

export class CruxArchivedArticlesComponent {

  constructor() { }

}
