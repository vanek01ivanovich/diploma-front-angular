import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseBodyComponent } from './test-case-body.component';

describe('TestCaseBodyComponent', () => {
  let component: TestCaseBodyComponent;
  let fixture: ComponentFixture<TestCaseBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
