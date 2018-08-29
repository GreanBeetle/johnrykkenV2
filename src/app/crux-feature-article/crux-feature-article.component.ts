import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crux-feature-article',
  templateUrl: './crux-feature-article.component.html',
  styleUrls: ['./crux-feature-article.component.scss']
})
export class CruxFeatureArticleComponent {
  featureArticle;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.afs.doc('articles/3mjniyJYpIm7KTkhVEis').ref.get().then((doc) => {
      this.featureArticle = doc.data();
    });
  }

}
