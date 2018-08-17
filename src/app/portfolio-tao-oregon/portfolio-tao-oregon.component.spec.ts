import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTaoOregonComponent } from './portfolio-tao-oregon.component';

describe('PortfolioTaoOregonComponent', () => {
  let component: PortfolioTaoOregonComponent;
  let fixture: ComponentFixture<PortfolioTaoOregonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTaoOregonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTaoOregonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
