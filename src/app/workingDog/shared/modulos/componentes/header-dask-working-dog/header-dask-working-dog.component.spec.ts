import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDaskWorkingDOGComponent } from './header-dask-working-dog.component';

describe('HeaderDaskWorkingDOGComponent', () => {
  let component: HeaderDaskWorkingDOGComponent;
  let fixture: ComponentFixture<HeaderDaskWorkingDOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDaskWorkingDOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDaskWorkingDOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
