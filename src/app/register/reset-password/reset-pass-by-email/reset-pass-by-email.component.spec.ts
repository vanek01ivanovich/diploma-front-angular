import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassByEmailComponent } from './reset-pass-by-email.component';

describe('ResetPassByEmailComponent', () => {
  let component: ResetPassByEmailComponent;
  let fixture: ComponentFixture<ResetPassByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassByEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
