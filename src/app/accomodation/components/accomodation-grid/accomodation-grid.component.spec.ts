import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationGridComponent } from './accomodation-grid.component';

describe('AccomodationGridComponent', () => {
  let component: AccomodationGridComponent;
  let fixture: ComponentFixture<AccomodationGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationGridComponent]
    });
    fixture = TestBed.createComponent(AccomodationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
