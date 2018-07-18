import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSkillsComponent } from './welcome-skills.component';

describe('WelcomeSkillsComponent', () => {
  let component: WelcomeSkillsComponent;
  let fixture: ComponentFixture<WelcomeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
