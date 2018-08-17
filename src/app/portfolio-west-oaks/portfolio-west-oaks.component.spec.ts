import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWestOaksComponent } from './portfolio-west-oaks.component';

describe('PortfolioWestOaksComponent', () => {
  let component: PortfolioWestOaksComponent;
  let fixture: ComponentFixture<PortfolioWestOaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWestOaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWestOaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
