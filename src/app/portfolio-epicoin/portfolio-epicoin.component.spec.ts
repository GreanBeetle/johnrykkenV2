import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEpicoinComponent } from './portfolio-epicoin.component';

describe('PortfolioEpicoinComponent', () => {
  let component: PortfolioEpicoinComponent;
  let fixture: ComponentFixture<PortfolioEpicoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioEpicoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioEpicoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
