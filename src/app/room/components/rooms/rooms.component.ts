import { Component, Input } from '@angular/core';
import Room from '../../models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  @Input() public rooms: Room[];
}
