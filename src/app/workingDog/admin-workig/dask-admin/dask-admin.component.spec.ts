import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaskAdminComponent } from './dask-admin.component';

describe('DaskAdminComponent', () => {
  let component: DaskAdminComponent;
  let fixture: ComponentFixture<DaskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaskAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
