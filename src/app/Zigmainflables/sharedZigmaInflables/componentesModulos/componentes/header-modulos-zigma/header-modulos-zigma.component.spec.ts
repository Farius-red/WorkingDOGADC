import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModulosZigmaComponent } from './header-modulos-zigma.component';

describe('HeaderModulosZigmaComponent', () => {
  let component: HeaderModulosZigmaComponent;
  let fixture: ComponentFixture<HeaderModulosZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderModulosZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderModulosZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
