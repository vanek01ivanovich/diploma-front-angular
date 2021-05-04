import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompoundNameComponent } from './create-compound-name.component';

describe('CreateCompoundNameComponent', () => {
  let component: CreateCompoundNameComponent;
  let fixture: ComponentFixture<CreateCompoundNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompoundNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompoundNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
