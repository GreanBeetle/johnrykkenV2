import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  article: any;
  articleCategory: string;
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
        this.articleCategory = doc.data().category;
      });
  }

  updateCategory(event: any) {
    this.articleCategory = event.target.value;
  }

}
