import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activityIcon } from 'src/app/core/models/activityIcons';
import Activity from '../models/activity';
import { ActivityType } from '../models/activityType';

const data = [{
  id: 1,
  alt: 'Kayaking',
  src: '/assets/kayaking.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.kayaking.icon,
  title: 'Kayaking'
},
{
  id: 8,
  alt: 'Paragliding',
  src: '/assets/paragliding.jpg',
  activityType: ActivityType.Others,
  icon: activityIcon.paragliding.icon,
  title: 'Paragliding'
},
{
  id: 2,
  alt: '',
  src: '/assets/',
  activityType: ActivityType.Craft,
  title: 'Sewing'
},
{
  id: 7,
  alt: '3',
  src: '/assets/sup - stand up paddleboard.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.sup,
  title: 'SUP'
},
{
  id: 3,
  alt: '',
  src: '/assets/',
  activityType: ActivityType.Craft,
  title: 'Book Making'
},
{
  id: 4,
  alt: '',
  src: '/assets/windsurfing.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.windsurfing.icon,
  title: 'Windsurfing'
}, {
  id: 5,
  alt: '',
  src: '/assets/',
  activityType: ActivityType.WaterSports,
  title: 'Windfoil',
  icon: activityIcon.foil.icon,
}, {
  id: 6,
  alt: 'Wing Surfing and Foil',
  src: '/assets/wing surfing and foil.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.foil.icon,
  title: 'Wing Surfing and Foil'
}, {
  id: 7,
  alt: 'Wind Sup',
  src: '/assets/windsup.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.windsurfing.icon,
  title: 'Wind SUP'
},] as Activity[];

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  public get(): Observable<Activity[]> {
    return of(data);
  }
}
