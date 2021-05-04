import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseEditComponent } from './test-case-edit.component';

describe('TestCaseEditComponent', () => {
  let component: TestCaseEditComponent;
  let fixture: ComponentFixture<TestCaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
