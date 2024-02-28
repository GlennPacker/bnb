import { Component, Input } from '@angular/core';
import Room from '../../models/room';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.scss']
})
export class RoomGridComponent {
  @Input() public rooms: Room[];
}
