import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})

export class ArticleDetailComponent implements OnInit, OnDestroy {
  ID;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.ID = params['id'];
       alert('Your ID is ' + params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
