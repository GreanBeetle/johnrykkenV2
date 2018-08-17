import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBianchiBrewComponent } from './portfolio-bianchi-brew.component';

describe('PortfolioBianchiBrewComponent', () => {
  let component: PortfolioBianchiBrewComponent;
  let fixture: ComponentFixture<PortfolioBianchiBrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBianchiBrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBianchiBrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
