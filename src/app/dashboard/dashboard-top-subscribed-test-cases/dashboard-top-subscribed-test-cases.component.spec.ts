import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopSubscribedTestCasesComponent } from './dashboard-top-subscribed-test-cases.component';

describe('DashboardTopSubscribedTestCasesComponent', () => {
  let component: DashboardTopSubscribedTestCasesComponent;
  let fixture: ComponentFixture<DashboardTopSubscribedTestCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTopSubscribedTestCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopSubscribedTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
