import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScenarioCreateComponent } from './test-scenario-create.component';

describe('TestScenarioCreateComponent', () => {
  let component: TestScenarioCreateComponent;
  let fixture: ComponentFixture<TestScenarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScenarioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScenarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
