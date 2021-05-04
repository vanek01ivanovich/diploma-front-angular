import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataSetComponent } from './create-data-set.component';

describe('CreateDataSetComponent', () => {
  let component: CreateDataSetComponent;
  let fixture: ComponentFixture<CreateDataSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
