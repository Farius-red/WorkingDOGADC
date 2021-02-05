import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginZigmaComponent } from './login-zigma.component';

describe('LoginZigmaComponent', () => {
  let component: LoginZigmaComponent;
  let fixture: ComponentFixture<LoginZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
