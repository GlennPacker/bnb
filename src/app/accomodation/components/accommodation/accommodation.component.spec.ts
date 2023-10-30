import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccommodationComponent } from './accommodation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AccommodationComponent', () => {
  let component: AccommodationComponent;
  let fixture: ComponentFixture<AccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      declarations: [AccommodationComponent]
    });
    fixture = TestBed.createComponent(AccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
