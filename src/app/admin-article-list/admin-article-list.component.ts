import { Component, OnInit } from '@angular/core';
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

export class AdminArticleListComponent implements OnInit {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  articleArray: Observable<Article[]>;
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
        console.log(`${id} is true`);
      } else if (id !== articleID) {
        document.update({
          isFeature: false
        });
        console.log(`${id} is false`);
      } else {
        console.log('Error updating feature Article');
      }
    }
  }

  // featureArticle(article) {
  //   const articleArray = this.articlesCollection.snapshotChanges();
  //   articleArray.subscribe( a => {
  //     a.forEach( item => {
  //       const ID = article.id;
  //       const articleID = item.payload.doc.data().id;
  //       const title = item.payload.doc.data().title;
  //       if (ID === articleID) {
  //         this.articlesCollection.doc(`${articleID}`).update({
  //           isFeature: true
  //         });
  //       } else {
  //         this.articlesCollection.doc(`${articleID}`).update({
  //           isFeature: false
  //         });
  //       }
  //       console.log(`${title} with ${articleID} has been updated`);
  //     });
  //   });
  // }

  ngOnInit() {
  }

}
