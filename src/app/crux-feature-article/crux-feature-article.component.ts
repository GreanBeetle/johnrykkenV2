import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-crux-feature-article',
  templateUrl: './crux-feature-article.component.html',
  styleUrls: ['./crux-feature-article.component.scss']
})
export class CruxFeatureArticleComponent {
  featureArticle;
  featureArticle$: Observable<Article>;

  constructor(private afs: AngularFirestore,
              private router: Router) {
                this.afs.doc('articles/3mjniyJYpIm7KTkhVEis').ref.get().then((doc) => {
                  this.featureArticle = doc.data();
                });
                // this.featureArticle$ = this.featureArticle.valueChanges();
             }
}
