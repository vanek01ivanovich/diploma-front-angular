import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTestCaseExecutionComponent } from './list-of-test-case-execution.component';

describe('ListOfTestCaseExecutionComponent', () => {
  let component: ListOfTestCaseExecutionComponent;
  let fixture: ComponentFixture<ListOfTestCaseExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTestCaseExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTestCaseExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
