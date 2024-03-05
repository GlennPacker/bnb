import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import Room from '../../models/Room';
import { RoomContainerComponent } from './room-container.component';


describe('RoomContainerComponent', () => {
  let component: RoomContainerComponent;
  let fixture: ComponentFixture<RoomContainerComponent>;
  const activatedRoute = {
    data: of({
      RoomList: [
        { room: 1 } as Room,
      ]
    })
  }
  jasmine.createSpyObj('ActivatedRoute', ['getValue']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomContainerComponent],
      providers: [ 
        {provide: ActivatedRoute, useValue: activatedRoute}
      ],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(RoomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
