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
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
  providers: [ AuthenticationService, MessageService ]
})

export class ArticleAddComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  category = 'coding and programming';

  constructor(private afs: AngularFirestore,
              private toast: MessageService) {
    this.articlesCollection = this.afs.collection('articles');
    this.articles = this.articlesCollection.valueChanges();
  }

  showToast(message, severity) {
    this.toast.add({
      severity: severity,
      summary: message,
      life: 5000
    });
  }

  addArticle(title, subtitle, date, content, keywords) {
    let message = '';
    let severity = '';
    if ( title.length === 0 ||
         subtitle.length === 0 ||
         date.length === 0 ||
         content.length === 0 ||
         keywords.length === 0 ) {
           message = 'Dude! Seriously. Fill out all the fields.';
           severity = 'error';
           this.showToast(message, severity);
    } else {
      message = `${title} has been added to your article collection!`;
      severity = 'success';
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
      this.showToast(message, severity);
    }
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
