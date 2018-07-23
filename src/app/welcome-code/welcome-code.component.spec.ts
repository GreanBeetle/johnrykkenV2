import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCodeComponent } from './welcome-code.component';

describe('WelcomeCodeComponent', () => {
  let component: WelcomeCodeComponent;
  let fixture: ComponentFixture<WelcomeCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
