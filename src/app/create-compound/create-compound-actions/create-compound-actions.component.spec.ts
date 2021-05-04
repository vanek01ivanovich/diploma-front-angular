import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompoundActionsComponent } from './create-compound-actions.component';

describe('CreateCompoundActionsComponent', () => {
  let component: CreateCompoundActionsComponent;
  let fixture: ComponentFixture<CreateCompoundActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompoundActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompoundActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
