import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavZigmaComponent } from './nav-zigma.component';

describe('NavZigmaComponent', () => {
  let component: NavZigmaComponent;
  let fixture: ComponentFixture<NavZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
