import { Component, Input } from '@angular/core';
import Room from '../../models/Room';

@Component({
  selector: 'app-grid-room',
  templateUrl: './grid-room.component.html',
  styleUrls: ['./grid-room.component.scss']
})
export class GridRoomComponent {
  @Input() public index: number;
  @Input() public link: string;
  @Input() public room: Room;
}
