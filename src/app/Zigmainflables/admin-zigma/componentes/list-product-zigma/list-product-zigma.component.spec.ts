import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductZigmaComponent } from './list-product-zigma.component';

describe('ListProductZigmaComponent', () => {
  let component: ListProductZigmaComponent;
  let fixture: ComponentFixture<ListProductZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
