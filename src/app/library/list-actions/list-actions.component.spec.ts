import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionsComponent } from './list-actions.component';

describe('ListActionsComponent', () => {
  let component: ListActionsComponent;
  let fixture: ComponentFixture<ListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
