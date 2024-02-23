import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RoomContainerComponent } from './room-container.component';

describe('RoomContainerComponent', () => {
  let component: RoomContainerComponent;
  let fixture: ComponentFixture<RoomContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      declarations: [RoomContainerComponent]
    });
    fixture = TestBed.createComponent(RoomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
