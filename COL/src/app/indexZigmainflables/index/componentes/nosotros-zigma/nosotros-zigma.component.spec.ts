import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosZigmaComponent } from './nosotros-zigma.component';

describe('NosotrosZigmaComponent', () => {
  let component: NosotrosZigmaComponent;
  let fixture: ComponentFixture<NosotrosZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
