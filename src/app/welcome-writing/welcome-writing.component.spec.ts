import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWritingComponent } from './welcome-writing.component';

describe('WelcomeWritingComponent', () => {
  let component: WelcomeWritingComponent;
  let fixture: ComponentFixture<WelcomeWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
