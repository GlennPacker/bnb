import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGridComponent } from './room-grid.component';

describe('roomGridComponent', () => {
  let component: RoomGridComponent;
  let fixture: ComponentFixture<RoomGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomGridComponent]
    });
    fixture = TestBed.createComponent(RoomGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
