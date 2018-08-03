import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePaginationComponent } from './code-pagination.component';

describe('CodePaginationComponent', () => {
  let component: CodePaginationComponent;
  let fixture: ComponentFixture<CodePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
