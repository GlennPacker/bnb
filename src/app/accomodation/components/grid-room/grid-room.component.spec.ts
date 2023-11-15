import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRoomComponent } from './grid-room.component';

describe('GridRoomComponent', () => {
  let component: GridRoomComponent;
  let fixture: ComponentFixture<GridRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridRoomComponent]
    });
    fixture = TestBed.createComponent(GridRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
