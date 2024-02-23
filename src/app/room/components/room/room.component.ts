import { Component, Input } from '@angular/core';
import Room from '../../models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() public id: string | null = '';
  @Input() public room: Room | undefined;
}
