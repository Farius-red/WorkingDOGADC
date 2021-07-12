import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksDasboardComponent } from './links-dasboard.component';

describe('LinksDasboardComponent', () => {
  let component: LinksDasboardComponent;
  let fixture: ComponentFixture<LinksDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
