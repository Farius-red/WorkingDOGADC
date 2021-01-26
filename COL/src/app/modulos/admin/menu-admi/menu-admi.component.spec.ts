import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdmiComponent } from './menu-admi.component';

describe('MenuAdmiComponent', () => {
  let component: MenuAdmiComponent;
  let fixture: ComponentFixture<MenuAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
