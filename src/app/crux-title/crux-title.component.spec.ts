import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruxTitleComponent } from './crux-title.component';

describe('CruxTitleComponent', () => {
  let component: CruxTitleComponent;
  let fixture: ComponentFixture<CruxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
