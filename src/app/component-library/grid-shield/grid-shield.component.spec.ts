import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GridShieldComponent } from './grid-shield.component';


describe('GridShieldComponent', () => {
  let component: GridShieldComponent;
  let fixture: ComponentFixture<GridShieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridShieldComponent],
      imports:[RouterModule, RouterTestingModule],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(GridShieldComponent);
    component = fixture.componentInstance;
    component.title = 'ABC';
    component.link = 'linkURL';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show the title', () => {
    const deA = fixture.debugElement.query(By.css('h4'));
    expect(deA.nativeElement.textContent).toContain('ABC');

    expect(component).toBeTruthy();
  });
});
