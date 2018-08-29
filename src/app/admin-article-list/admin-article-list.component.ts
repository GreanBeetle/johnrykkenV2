import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.scss']
})

export class AdminArticleListComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  constructor(private afs: AngularFirestore,
              private router: Router) {
    this.articlesCollection = this.afs.collection('articles');
    this.articles = this.articlesCollection.valueChanges();
  }

  visitArticle(article) {
    this.router.navigate([`/article/${article.id}`]);
  }

  deleteArticle(article) {
    if (confirm('Are you sure you want to delete this?')) {
      const articleToDelete = this.articlesCollection.doc(article.id);
      articleToDelete.delete();
    }
  }

}
