import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-crux-feature-article',
  templateUrl: './crux-feature-article.component.html',
  styleUrls: ['./crux-feature-article.component.scss']
})

export class CruxFeatureArticleComponent implements OnInit {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  featureArticle;
  archivedArticles: Array<any> = [];
  month: string;
  year: number;
  day: number;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.articlesCollection = this.afs.collection('articles');
    this.articles = this.articlesCollection.valueChanges();
    this.articlesCollection.snapshotChanges().forEach( a => {
      a.forEach( item => {
        const isFeature = item.payload.doc.data().isFeature;
        if ( isFeature === true ) {
          this.featureArticle = item.payload.doc.data();
        } else {
          this.archivedArticles.push(item.payload.doc.data());
        }
      });
    });
  }

  visitFeatureArticle(id) {
    this.router.navigate([`/article/${id}`]);
  }

  ngOnInit () {
    const date = new Date();
    const monthNames = ['January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                      ];
    this.month = monthNames[date.getMonth()];
    this.year = date.getFullYear();
    this.day = date.getDate();
  }

}
