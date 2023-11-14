import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import Accommodation from '../../models/Accommodation';
import { AccommodationContainerComponent } from './accommodation-container.component';


describe('AccommodationContainerComponent', () => {
  let component: AccommodationContainerComponent;
  let fixture: ComponentFixture<AccommodationContainerComponent>;
  const activatedRoute = {
    data: of({
      accommodationList: [
        { room: 1 } as Accommodation,
      ]
    })
  }
  jasmine.createSpyObj('ActivatedRoute', ['getValue']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodationContainerComponent],
      providers: [ 
        {provide: ActivatedRoute, useValue: activatedRoute}
      ],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(AccommodationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
