import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCountComponent } from './dashboard-count.component';

describe('DashboardCountComponent', () => {
  let component: DashboardCountComponent;
  let fixture: ComponentFixture<DashboardCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
