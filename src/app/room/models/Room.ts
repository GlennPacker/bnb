import Image from './Image';
import { RoomType } from './RoomType';

export default class Room {
  public alt: string;
  public bullets: string[];
  public description: string;
  public img: string;
  public moreImages: Image[];
  public name: string;
  public room: number;
  public type: RoomType;
}
