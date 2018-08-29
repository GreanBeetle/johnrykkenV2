import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruxFeatureArticleComponent } from './crux-feature-article.component';

describe('CruxFeatureArticleComponent', () => {
  let component: CruxFeatureArticleComponent;
  let fixture: ComponentFixture<CruxFeatureArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruxFeatureArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruxFeatureArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
