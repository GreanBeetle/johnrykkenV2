import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFilmFanaticComponent } from './portfolio-film-fanatic.component';

describe('PortfolioFilmFanaticComponent', () => {
  let component: PortfolioFilmFanaticComponent;
  let fixture: ComponentFixture<PortfolioFilmFanaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFilmFanaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFilmFanaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
