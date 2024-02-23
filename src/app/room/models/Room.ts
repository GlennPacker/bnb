import { RoomType } from './roomType';

export default class Room {
  room: number;
  type: RoomType;
  name: string;
  description: string;
  bullets: string[];
  img: string;
  alt: string;
}