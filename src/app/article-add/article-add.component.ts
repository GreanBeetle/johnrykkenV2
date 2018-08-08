import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
  providers: [ AuthenticationService ]
})

export class ArticleAddComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  category = 'coding and programming';

  constructor(private afs: AngularFirestore) {
    this.articlesCollection = this.afs.collection('articles');
    this.articles = this.articlesCollection.valueChanges();
  }

  addArticle(title, subtitle, date, content, keywords) {
    alert('add article clicked');
    const id = this.afs.createId();
    const category = this.category;
    this.articlesCollection.doc(id).set({
        'id': id,
        'title': title,
        'subtitle': subtitle,
        'date': date,
        'category': category,
        'content': content,
        'keywords': keywords
    });
  }

  setCategory(event: any) {
    this.category = event.target.value;
    alert('Category is ' + this.category);
  }

  // ############# input boxes 'keyUp' events. currently unused.
  onKey(event: any, input, type) {
    if (input.length >= 5) {
      console.log('onKey method still works.');
    }
  }
  // ############# input boxes 'keyUp' events. currently unused.


}
