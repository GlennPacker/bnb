import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import Activity from '../models/activity';
import { ActivityType } from '../models/activityType';

const data = [{
  activityType: ActivityType.WaterSports,
  name: 'Kayaking'
}, {
  activityType: ActivityType.WaterSports,
  name: 'Windsurfing'
}, {
  activityType: ActivityType.WaterSports,
  name: 'Windfoil'
}, {
  activityType: ActivityType.WaterSports,
  name: 'Wingfoil'
}] as Activity[];

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  getAll(): Observable<Activity[]> {
    return of(data)
      .pipe(
        tap(data => console.log('Rooms:', JSON.stringify(data))),
      );
  }

  get(name: string): Observable<Activity> {
    return this.getAll()
      .pipe(
        map(((rooms: Activity[]) => rooms.find(data => data.name === name)))
      )
  }
}
