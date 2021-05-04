import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScenarioAddActionComponent } from './test-scenario-add-action.component';

describe('TestScenarioAddActionComponent', () => {
  let component: TestScenarioAddActionComponent;
  let fixture: ComponentFixture<TestScenarioAddActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScenarioAddActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScenarioAddActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
