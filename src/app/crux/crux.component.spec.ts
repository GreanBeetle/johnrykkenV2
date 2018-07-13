import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruxComponent } from './crux.component';

describe('CruxComponent', () => {
  let component: CruxComponent;
  let fixture: ComponentFixture<CruxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
