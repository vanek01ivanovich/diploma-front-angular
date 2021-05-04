import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScenarioListComponent } from './test-scenario-list.component';

describe('TestScenarioListComponent', () => {
  let component: TestScenarioListComponent;
  let fixture: ComponentFixture<TestScenarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScenarioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScenarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
