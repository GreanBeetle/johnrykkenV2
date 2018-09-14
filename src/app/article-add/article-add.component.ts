import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
import { MessageService } from 'primeng/api';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
  providers: [ MessageService,
               UserAuthService ]
})

export class ArticleAddComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  category = 'coding and programming';
  public get isAdmin(): boolean {
    return this.userauth.isAdmin;
  }

  constructor(private afs: AngularFirestore,
              private toast: MessageService,
              private userauth: UserAuthService) {
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
      if ( this.isAdmin === false ) {
        this.showToast('You must be an administrator to use this', 'info');
      } else if ( title.length === 0 ||
                  subtitle.length === 0 ||
                  date.length === 0 ||
                  content.length === 0 ||
                  keywords.length === 0 ) {
        this.showToast('Dude! Seriously. Fill out all the fields.', 'error');
      } else {
        const message = `${title} has been added to your article collection!`;
        const id = this.afs.createId();
        const category = this.category;
        this.articlesCollection.doc(id).set({
          'id': id,
          'title': title,
          'subtitle': subtitle,
          'date': date,
          'category': category,
          'content': content,
          'keywords': keywords,
          'isFeature': false
        });
        this.showToast(message, 'success');
      }
  }

  setCategory(event: any) {
    this.category = event.target.value;
  }

}
