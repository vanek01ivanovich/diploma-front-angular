import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompoundButtonMenuComponent } from './edit-compound-button-menu.component';

describe('EditCompoundButtonMenuComponent', () => {
  let component: EditCompoundButtonMenuComponent;
  let fixture: ComponentFixture<EditCompoundButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompoundButtonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompoundButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
