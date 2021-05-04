import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTestCaseExecutionsNumberComponent } from './dashboard-test-case-executions-number.component';

describe('DashboardTestCaseExecutionsNumberComponent', () => {
  let component: DashboardTestCaseExecutionsNumberComponent;
  let fixture: ComponentFixture<DashboardTestCaseExecutionsNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTestCaseExecutionsNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTestCaseExecutionsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
