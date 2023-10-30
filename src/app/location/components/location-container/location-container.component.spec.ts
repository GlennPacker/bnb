import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LocationContainerComponent } from './location-container.component';

describe('LocationContainerComponent', () => {
  let component: LocationContainerComponent;
  let fixture: ComponentFixture<LocationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationContainerComponent],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(LocationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
