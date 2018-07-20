import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCruxComponent } from './welcome-crux.component';

describe('WelcomeCruxComponent', () => {
  let component: WelcomeCruxComponent;
  let fixture: ComponentFixture<WelcomeCruxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCruxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCruxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
