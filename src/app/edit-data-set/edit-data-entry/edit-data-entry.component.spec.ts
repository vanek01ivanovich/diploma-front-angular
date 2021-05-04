import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataEntryComponent } from './edit-data-entry.component';

describe('EditDataEntryComponent', () => {
  let component: EditDataEntryComponent;
  let fixture: ComponentFixture<EditDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
