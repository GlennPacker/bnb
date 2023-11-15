import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridShieldComponent } from './grid-shield.component';


describe('ShieldComponent', () => {
  let component: GridShieldComponent;
  let fixture: ComponentFixture<GridShieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridShieldComponent]
    });
    fixture = TestBed.createComponent(GridShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
