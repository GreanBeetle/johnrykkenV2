import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
import { map, take } from 'rxjs/operators';
// ########## REMOVE THIS ##########
import { UserAuthService } from '../user-auth.service';
// ########## REMOVE THIS ##########



@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.scss']
})

export class AdminArticleListComponent {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  IDs: Array<any> = [];
  public get isAdmin(): boolean {
    return this.userauth.isAdmin;
  }
  constructor(private afs: AngularFirestore,
              private router: Router,
              // ########## REMOVE THIS ##########
              private userauth: UserAuthService
              // ########## REMOVE THIS ##########
            ) {
    this.articlesCollection = this.afs.collection('articles');
    this.articles = this.articlesCollection.valueChanges();
    this.articlesCollection.snapshotChanges().forEach( a => {
      a.forEach( item => {
        const id = item.payload.doc.data().id;
        this.IDs.push(id);
      });
    });

  }

  visitArticle(article) {
    this.router.navigate([`/article/${article.id}`]);
  }

  // ########## REMOVE IF ELSE STATEMENT! ##########
  editArticle(article) {
    if (this.isAdmin === true) {
      this.router.navigate([`/article-edit/${article.id}`]);
    } else {
      alert('You must be an administrator to edit an article');
    }
  }

  // ########## REMOVE IF ELSE STATEMENT! ##########
  deleteArticle(article) {
    if (this.isAdmin === true) {
      if (confirm('Are you sure you want to delete this?')) {
        const articleToDelete = this.articlesCollection.doc(article.id);
        articleToDelete.delete();
      }
    } else {
      alert('You must be an administrator to delete an article');
    }
  }

  featureArticle(article) {
    for (let id of this.IDs) {
      const document = this.articlesCollection.doc(`${id}`);
      const articleID = article.id;
      if (id === articleID) {
        document.update({
          isFeature: true
        });
      } else if (id !== articleID) {
        document.update({
          isFeature: false
        });
      } else {
        console.log('Error updating feature Article');
      }
    }
  }

}
