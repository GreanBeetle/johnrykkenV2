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
  private articleDoc: AngularFirestoreDocument<Article>;
  article: Observable<Article>;
  private sub: any;
  ID;

  constructor (private route: ActivatedRoute,
               private afs: AngularFirestore) {
               alert(this.ID);
  }

  // getArticle(id) {
  //   const article = this.afs.collection('articles').doc(id);
  //   return article;
  // }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.ID = params['id'];
       this.articleDoc = this.afs.doc<Article>(`articles/${this.ID}`);
       this.article = this.articleDoc.valueChanges();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
