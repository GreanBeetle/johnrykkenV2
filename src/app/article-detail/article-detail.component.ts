import { Component, OnInit, OnDestroy } from '@angular/core';
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

export class ArticleDetailComponent implements OnInit, OnDestroy {
  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  private articleDoc: AngularFirestoreDocument<Article>;
  article: any;
  private sub: any;
  id;

  constructor (private route: ActivatedRoute,
               private afs: AngularFirestore) {
      this.articlesCollection = this.afs.collection('articles');
      this.articles = this.articlesCollection.valueChanges();
      this.route.params.subscribe(params => {
          this.id = params['id'];
      });
      this.articlesCollection.doc(`${this.id}`).ref.get().then((doc) => {
        alert('Doc data is ' + doc.data().title);
        this.article = doc.data();
      });
  }


  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //    this.ID = params['id'];
         // this.articleDoc = this.afs.doc<Article>(`articles/${this.ID}`);
         // this.article = this.articleDoc.valueChanges();
    //        this.afs.collection('articles').doc(this.ID).ref.get().then(function(doc) {
    //        if (doc.exists) {
    //          this.article = doc.data();
    //          alert('Doc data is : ' + doc.data().title);
    //          console.log('Document data:', doc.data());
    //        } else {
    //          console.log('No such document!');
    //        }
    //        }).catch(function(error) {
    //          console.log('Error getting document:', error);
    //        });
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
