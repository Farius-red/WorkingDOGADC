import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdmWorkingComponent } from './menu-adm-working.component';

describe('MenuAdmWorkingComponent', () => {
  let component: MenuAdmWorkingComponent;
  let fixture: ComponentFixture<MenuAdmWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdmWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdmWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
