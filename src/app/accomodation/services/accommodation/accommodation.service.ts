import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import Accommodation from '../../models/Accommodation';
import { RoomType } from '../../models/RoomType';

const data = [{
  room: 1,
  type: RoomType.twin
}, {
  room: 2,
  type: RoomType.double
}, {
  room: 3,
  type: RoomType.family
}, {
  room: 4,
  type: RoomType.double
}, {
  room: 5,
  type: RoomType.family
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
