import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdminWorkingDogComponent } from './menu-admin-working-dog.component';

describe('MenuAdminWorkingDogComponent', () => {
  let component: MenuAdminWorkingDogComponent;
  let fixture: ComponentFixture<MenuAdminWorkingDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdminWorkingDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdminWorkingDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
