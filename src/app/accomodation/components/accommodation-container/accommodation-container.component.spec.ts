import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationContainerComponent } from './accommodation-container.component';

describe('AccommodationContainerComponent', () => {
  let component: AccommodationContainerComponent;
  let fixture: ComponentFixture<AccommodationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodationContainerComponent]
    });
    fixture = TestBed.createComponent(AccommodationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
