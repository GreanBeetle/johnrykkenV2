import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';
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
    const id = article.id;
    const articleArray = this.articlesCollection.snapshotChanges();
    articleArray.subscribe( payload =>  {
      payload.forEach( item => {
        const artID = item.payload.doc.data().id;
        const artTITLE = item.payload.doc.data().title;
        alert('TITLE: ' + artTITLE + ' ID is: ' + artID);
      });
    });

    // this.categories = this.categoryCollection.snapshotChanges().map((actions: any) => {
    //   return actions.map(action => {
    //     const data = action.payload.doc.data();
    //     const key = action.payload.doc.id;
    //     return {key, ...data};
    //   });
    // });
    //
    // this.articles.subscribe(payload => {
    //     payload.forEach( payArticle => {
    //       alert('FeatureArticle loop: ' + payArticle.id);
    //     });
    // });

  }

}
