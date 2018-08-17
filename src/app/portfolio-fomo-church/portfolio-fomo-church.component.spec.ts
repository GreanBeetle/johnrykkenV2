import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFomoChurchComponent } from './portfolio-fomo-church.component';

describe('PortfolioFomoChurchComponent', () => {
  let component: PortfolioFomoChurchComponent;
  let fixture: ComponentFixture<PortfolioFomoChurchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFomoChurchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFomoChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
