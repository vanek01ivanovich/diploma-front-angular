import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompoundsComponent } from './list-compounds.component';

describe('ListCompoundsComponent', () => {
  let component: ListCompoundsComponent;
  let fixture: ComponentFixture<ListCompoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
