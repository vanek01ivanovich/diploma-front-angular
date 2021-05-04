import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseCreateComponent } from './test-case-create.component';

describe('TestCaseCreateComponent', () => {
  let component: TestCaseCreateComponent;
  let fixture: ComponentFixture<TestCaseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
