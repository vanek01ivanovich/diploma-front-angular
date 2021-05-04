import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewActionComponent } from './edit-view-action.component';

describe('EditViewActionComponent', () => {
  let component: EditViewActionComponent;
  let fixture: ComponentFixture<EditViewActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViewActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
