import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompoundActionsComponent } from './edit-compound-actions.component';

describe('EditCompoundActionsComponent', () => {
  let component: EditCompoundActionsComponent;
  let fixture: ComponentFixture<EditCompoundActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompoundActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompoundActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
