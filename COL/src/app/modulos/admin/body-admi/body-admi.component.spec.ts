import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdmiComponent } from './body-admi.component';

describe('BodyAdmiComponent', () => {
  let component: BodyAdmiComponent;
  let fixture: ComponentFixture<BodyAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
