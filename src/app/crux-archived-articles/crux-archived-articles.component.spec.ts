import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruxArchivedArticlesComponent } from './crux-archived-articles.component';

describe('CruxArchivedArticlesComponent', () => {
  let component: CruxArchivedArticlesComponent;
  let fixture: ComponentFixture<CruxArchivedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruxArchivedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruxArchivedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
