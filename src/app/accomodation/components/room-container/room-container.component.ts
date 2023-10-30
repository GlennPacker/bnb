import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-container',
  templateUrl: './room-container.component.html',
  styleUrls: ['./room-container.component.scss']
})
export class RoomContainerComponent {
  roomId: string | null = '';

  @Input()
  set id(roomId: string) {
    this.roomId = roomId;
  }
}
