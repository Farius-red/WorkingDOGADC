import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterWorkingDComponent } from './footer.workingD.component';



describe('FooterWorkingDComponent', () => {
  let component: FooterWorkingDComponent;
  let fixture: ComponentFixture<FooterWorkingDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWorkingDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWorkingDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
