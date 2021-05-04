import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompoundActionsComponent } from './list-compound-actions.component';

describe('ListCompoundActionsComponent', () => {
  let component: ListCompoundActionsComponent;
  let fixture: ComponentFixture<ListCompoundActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompoundActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompoundActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
