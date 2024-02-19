import { Component, Input } from '@angular/core';
import Accommodation from '../../models/Accommodation';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() public id: string | null = '';
  @Input() public room: Accommodation | undefined;
}
