import { Component, Input } from '@angular/core';
import Image from '../../models/Image';
import Room from '../../models/Room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() public id: string | null = '';
  public largeImage?: Image = null;
  @Input() public room: Room | undefined;

  public get images() {
    return [
      {
        src: this.room.img,
        alt: this.room.name
      }, 
      ...this.room.moreImages
    ]
  }

  public hideImage() {
    this.largeImage = null;
  }

  public showImage(index: number) {
    this.largeImage = this.images[index];
  }
}
