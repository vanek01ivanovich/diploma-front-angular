import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScenarioEditComponent } from './test-scenario-edit.component';

describe('TestScenarioEditComponent', () => {
  let component: TestScenarioEditComponent;
  let fixture: ComponentFixture<TestScenarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScenarioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScenarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
