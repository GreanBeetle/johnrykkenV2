import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioJohnRykkenV1Component } from './portfolio-john-rykken-v1.component';

describe('PortfolioJohnRykkenV1Component', () => {
  let component: PortfolioJohnRykkenV1Component;
  let fixture: ComponentFixture<PortfolioJohnRykkenV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioJohnRykkenV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioJohnRykkenV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
