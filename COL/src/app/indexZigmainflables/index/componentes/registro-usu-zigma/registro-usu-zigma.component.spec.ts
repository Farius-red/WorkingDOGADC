import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuZigmaComponent } from './registro-usu-zigma.component';

describe('RegistroUsuZigmaComponent', () => {
  let component: RegistroUsuZigmaComponent;
  let fixture: ComponentFixture<RegistroUsuZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
