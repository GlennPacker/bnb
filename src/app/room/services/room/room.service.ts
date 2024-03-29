import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import Room from '../../models/Room';
import { RoomType } from '../../models/RoomType';

const data = [{
  room: 1,
  type: RoomType.twin,
  name: 'Room 1',
  description: 'This is a twin room with en-suite shower and toilet and a stunning view across the valley.',
  bullets: [
    'Ensuite',
    'Valley View',
    'Sleeps 2',
  ],
  img: `/assets/Chambre D'Hote - Chambre 1.jpg`,
  alt: `Twin room in Chambre D'hôte in Bersac near a20 Limoges`,
}, {
  room: 2,
  type: RoomType.double,
  name: 'Room 2',
  description: 'This a double room with en-suite shower and toilet and another beautiful view across the valley.',
  bullets: [
    'Ensuite',
    'Valley View',
    'Sleeps 2',
  ],
  img: `/assets/Chambre D'Hote - Chambre 2.jpg`,
  alt: `Double room in Chambre D'hôte in Bersac near a20 Limoges, Haute Vienne`,
}, {
  room: 3,
  type: RoomType.family,
  name: 'Room 3',
  description: 'This a double room with additional bunk beds that can sleep up to 4 people and offers a peaceful garden view. There is a spacious private bathroom.',
  bullets: [
    'Private Bathroom',
    'Garden View',
    'Sleeps 4',
  ],
  img: '/assets/room 3.jpg',
  alt: `Family room in Chambre D'hôte near A20 Limoges, Haute Vienne`,
}, {
  room: 4,
  type: RoomType.double,
  name: 'Room 4',
  description: 'This a double room with pleasing garden view and a spacious private bathroom.',
  bullets: [
    'Private Bathroom',
    'Garden View',
    'Sleeps 2',
  ],
  img: `/assets/Chambre D'Hote - Chambre 4.jpg`,
  moreImages: [
    { 
      src: `/assets/Chambre D'Hote - Chambre 4 photo 2.jpg`,
      alt: 'Chambre 4 at Vue Du Vallon'
    },
    {
     src: `/assets/Chambre D'Hote - Chambre 4 photo 3.jpg`,
     alt: `Vue Du Vallon Chambre D'hôte room 4`
    }
  ],
  alt: `Double room in Chambre D'hôte in Bersac Sur Ravailier near Limoges`,
}, {
  room: 5,
  type: RoomType.family,
  name: 'Room 5',
  description: 'This is a large family room, containing a double bed, bunk-beds and an additional full-sized roll-out bed and a view of the terrace and garden.  There is also a large en-suite bathroom. ',
  bullets: [
    'Ensuite',
    'Garden View',
    'Sleeps 5',
  ],
  img: '/assets/room 5.jpg',
  moreImages: [
    { 
      src: `/assets/room 5 bunk beds.jpg`,
      alt: `Room 5 Family Room's Bunk Beds`
    },
    { 
      src: `/assets/room 5 family room.jpg`,
      alt: `Room 5 Large Family Room`
    }
  ],
  alt: `The Largest Family room at the Chambre D'hôte in Bersac Sur Ravalier near the A20 Limoges`,
}] as Room[];

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public get(roomNo: number): Observable<Room> {
    return this.getAll()
      .pipe(
        map(((rooms: Room[]) => rooms.find(data => data.room === roomNo)))
      )
  }

  public getAll(): Observable<Room[]> {
    return of(data);
  }
}
