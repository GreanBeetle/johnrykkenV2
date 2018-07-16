import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAboutmeComponent } from './welcome-aboutme.component';

describe('WelcomeAboutmeComponent', () => {
  let component: WelcomeAboutmeComponent;
  let fixture: ComponentFixture<WelcomeAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
