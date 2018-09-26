import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crux-feature-article',
  templateUrl: './crux-feature-article.component.html',
  styleUrls: ['./crux-feature-article.component.scss']
})

export class CruxFeatureArticleComponent implements OnInit {
  articleId = '3mjniyJYpIm7KTkhVEis';
  featureArticle;
  article;
  month: string;
  year: number;
  day: number;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.afs.doc(`articles/${this.articleId}`).ref.get().then((doc) => {
      this.featureArticle = doc.data();
    });

  }

  visitFeatureArticle() {
    this.router.navigate([`/article/${this.articleId}`]);
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
