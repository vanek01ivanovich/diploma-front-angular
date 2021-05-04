import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTestCasesComponent } from './list-of-test-cases.component';

describe('ListOfTestCasesComponent', () => {
  let component: ListOfTestCasesComponent;
  let fixture: ComponentFixture<ListOfTestCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTestCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
