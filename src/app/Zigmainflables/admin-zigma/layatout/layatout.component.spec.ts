import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayatoutComponent } from './layatout.component';

describe('LayatoutComponent', () => {
  let component: LayatoutComponent;
  let fixture: ComponentFixture<LayatoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayatoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayatoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
