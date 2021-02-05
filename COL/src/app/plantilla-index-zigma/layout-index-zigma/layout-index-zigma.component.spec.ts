import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutIndexZigmaComponent } from './layout-index-zigma.component';

describe('LayoutIndexZigmaComponent', () => {
  let component: LayoutIndexZigmaComponent;
  let fixture: ComponentFixture<LayoutIndexZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutIndexZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutIndexZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
