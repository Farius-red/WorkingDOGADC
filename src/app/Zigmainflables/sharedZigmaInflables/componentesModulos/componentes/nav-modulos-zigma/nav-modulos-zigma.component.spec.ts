import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModulosZigmaComponent } from './nav-modulos-zigma.component';

describe('NavModulosZigmaComponent', () => {
  let component: NavModulosZigmaComponent;
  let fixture: ComponentFixture<NavModulosZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavModulosZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavModulosZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
