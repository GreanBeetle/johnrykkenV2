import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})

export class ArticleDetailComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  article: any;
  id: any;

  constructor (private route: ActivatedRoute,
               private afs: AngularFirestore) {
      this.articlesCollection = this.afs.collection('articles');
      this.articles = this.articlesCollection.valueChanges();
      this.route.params.subscribe(params => {
          this.id = params['id'];
      });
      this.articlesCollection.doc(`${this.id}`).ref.get().then((doc) => {
        this.article = doc.data();
      });
  }




}
