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
  articlesCollection: AngularFirestoreCollection<Article>;
  archivedArticles: Array<any> = [];

  constructor(private afs: AngularFirestore, private router: Router) {
    this.articlesCollection = this.afs.collection('articles');
    this.articlesCollection.snapshotChanges().forEach( a => {
      a.forEach( item => {
        const isFeature = item.payload.doc.data().isFeature;
        if ( isFeature !== true ) {
          this.archivedArticles.push(item.payload.doc.data());
        }
      });
    });
  }

}
