import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTestCaseExecutionsByDateComponent } from './dashboard-test-case-executions-by-date.component';

describe('DashboardTestCaseExecutionsByDateComponent', () => {
  let component: DashboardTestCaseExecutionsByDateComponent;
  let fixture: ComponentFixture<DashboardTestCaseExecutionsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTestCaseExecutionsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTestCaseExecutionsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
