import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameDataSetComponent } from './edit-name-data-set.component';

describe('EditNameDataSetComponent', () => {
  let component: EditNameDataSetComponent;
  let fixture: ComponentFixture<EditNameDataSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNameDataSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNameDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
