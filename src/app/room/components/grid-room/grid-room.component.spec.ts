import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import Room from '../../models/Room';
import { GridRoomComponent } from './grid-room.component';

describe('GridRoomComponent', () => {
  let component: GridRoomComponent;
  let fixture: ComponentFixture<GridRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridRoomComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GridRoomComponent);
    component = fixture.componentInstance;
    component.room = {
      name: 'roomName',
      description: 'description'
    }  as Room;
    component.index = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show the room name', () => {
    const deA = fixture.debugElement.query(By.css('h3'));
    expect(deA.nativeElement.textContent).toContain('roomName');
  });
     
  it('should show the room description', () => {
    const deA = fixture.debugElement.query(By.css('div'));
    expect(deA.nativeElement.textContent).toContain('description');
  });
});
