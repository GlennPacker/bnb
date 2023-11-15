import { Component, Input } from '@angular/core';
import Accommodation from '../../models/Accommodation';

@Component({
  selector: 'app-grid-room',
  templateUrl: './grid-room.component.html',
  styleUrls: ['./grid-room.component.scss']
})
export class GridRoomComponent {
  @Input() room: Accommodation;
  @Input() index: number;
}
