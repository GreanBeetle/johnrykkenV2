import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUpworkCloneComponent } from './portfolio-upwork-clone.component';

describe('PortfolioUpworkCloneComponent', () => {
  let component: PortfolioUpworkCloneComponent;
  let fixture: ComponentFixture<PortfolioUpworkCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioUpworkCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioUpworkCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
