import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaApiComponent } from './nasa-api.component';

describe('NasaApiComponent', () => {
  let component: NasaApiComponent;
  let fixture: ComponentFixture<NasaApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
