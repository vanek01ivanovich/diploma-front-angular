import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDataSetComponent } from './list-of-data-set.component';

describe('ListOfDataSetComponent', () => {
  let component: ListOfDataSetComponent;
  let fixture: ComponentFixture<ListOfDataSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDataSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
