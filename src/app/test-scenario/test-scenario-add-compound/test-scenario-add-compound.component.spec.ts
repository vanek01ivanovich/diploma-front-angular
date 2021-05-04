import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScenarioAddCompoundComponent } from './test-scenario-add-compound.component';

describe('TestScenarioAddCompoundComponent', () => {
  let component: TestScenarioAddCompoundComponent;
  let fixture: ComponentFixture<TestScenarioAddCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScenarioAddCompoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScenarioAddCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
