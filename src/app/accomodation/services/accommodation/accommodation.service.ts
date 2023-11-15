import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import Accommodation from '../../models/Accommodation';
import { RoomType } from '../../models/RoomType';

const data = [{
  room: 1,
  type: RoomType.twin,
  name: 'Room 1',
  description: '',
  bullets: [
    'Ensuite',
    'Valley View',
    'Sleeps 2',
  ],
  img: '/assets/vue de vallon bersac.jpg',
  alt: `Twin room in Chambre D'hôte in Bersac near a20 Limoges` ,
}, {
  room: 2,
  type: RoomType.double,
  name: 'Room 2',
  description: '',
  bullets: [
    'Ensuite',
    'Valley View',
    'Sleeps 2',
  ],
  img: '/assets/vue de vallon bersac.jpg',
  alt: `Double room in Chambre D'hôte in Bersac near a20 Limoges, Haute Vienne` ,
}, {
  room: 3,
  type: RoomType.family,
  name: 'Room 3',
  description: '',
  bullets: [
    'Private Bathroom',
    'Gardens View',
    'Sleeps 4',
  ],
  img: '/assets/vue de vallon bersac.jpg',
  alt: `Family room in Chambre D'hôte near A20 Limoges, Haute Vienne` ,
}, {
  room: 4,
  type: RoomType.double,
  name: 'Room 4',
  description: '',
  bullets: [
    'Private Bathroom',
    'Gardens View',
    'Sleeps 2',
  ],
  img: '/assets/vue de vallon bersac.jpg',
  alt: `Double room in Chambre D'hôte in Bersac Sur Ravailier near Limoges` ,
}, {
  room: 5,
  type: RoomType.family,
  name: 'Room 5',
  description: '',
  bullets: [
    'Ensuite',
    'Gardens View',
    'Sleeps 5',
  ],
  img: '/assets/vue de vallon bersac.jpg',
  alt: `Large FAmily room in Chambre D'hôte in Bersac by the A20 near Limoges` ,
}] as Accommodation[];

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  getAll(): Observable<Accommodation[]> {
    return of(data)
      .pipe(
        tap(data => console.log('Rooms:', JSON.stringify(data))),
      );
  }

  get(roomNo: number): Observable<Accommodation> {
    return this.getAll()
      .pipe(
        map(((rooms: Accommodation[]) => rooms.find(data => data.room === roomNo)))
      )
      .pipe(
        tap(data => console.log('Rooms:', JSON.stringify(data))),
      )
  }
}
