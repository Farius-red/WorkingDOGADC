import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteUsuComponent } from './modal-delete-usu.component';

describe('ModalDeleteUsuComponent', () => {
  let component: ModalDeleteUsuComponent;
  let fixture: ComponentFixture<ModalDeleteUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
