import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundButtonMenuComponent } from './compound-button-menu.component';

describe('CompoundButtonMenuComponent', () => {
  let component: CompoundButtonMenuComponent;
  let fixture: ComponentFixture<CompoundButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoundButtonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
