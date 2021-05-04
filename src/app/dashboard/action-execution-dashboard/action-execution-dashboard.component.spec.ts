import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionExecutionDashboardComponent } from './action-execution-dashboard.component';

describe('ActionExecutionDashboardComponent', () => {
  let component: ActionExecutionDashboardComponent;
  let fixture: ComponentFixture<ActionExecutionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionExecutionDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionExecutionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
