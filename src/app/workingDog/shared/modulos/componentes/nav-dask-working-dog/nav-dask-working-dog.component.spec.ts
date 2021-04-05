import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDaskWorkingDOGComponent } from './nav-dask-working-dog.component';

describe('NavDaskWorkingDOGComponent', () => {
  let component: NavDaskWorkingDOGComponent;
  let fixture: ComponentFixture<NavDaskWorkingDOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDaskWorkingDOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDaskWorkingDOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
