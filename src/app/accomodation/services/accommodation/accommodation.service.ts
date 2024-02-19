import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import Accommodation from '../../models/Accommodation';
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
  img: '/assets/vue de vallon bersac.jpg',
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
  img: '/assets/vue de vallon bersac.jpg',
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
  img: '/assets/vue de vallon bersac.jpg',
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
  img: '/assets/vue de vallon bersac.jpg',
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
  img: '/assets/vue de vallon bersac.jpg',
  alt: `Large FAmily room in Chambre D'hôte in Bersac by the A20 near Limoges`,
}] as Accommodation[];

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  public get(roomNo: number): Observable<Accommodation> {
    return this.getAll()
      .pipe(
        map(((rooms: Accommodation[]) => rooms.find(data => data.room === roomNo)))
      )
  }

  public getAll(): Observable<Accommodation[]> {
    return of(data);
  }
}
