import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { activityIcon } from 'src/app/core/models/activityIcons';
import Activity from '../models/activity';
import { ActivityType } from '../models/activityType';

const data = [{
  alt: 'Kayaking',
  src: 'kayaking.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.kayaking.icon,
  title: 'Kayaking',
  paras: [
    'Kayaking for all levels with local guide, training and equipment rental available', 
    'White water runs are in the area and we only offer pickup and drop off service'
  ]
},
{
  alt: 'Paragliding',
  src: 'paragliding.jpg',
  activityType: ActivityType.Others,
  icon: activityIcon.paragliding.icon,
  title: 'Paragliding *',
  paras: [
    `Paragliding pick up and drop off with local guide. We have some great flying and one of several take offs just 10 mins drive away.`,
    `Must have your own wing, insurance and license.`
  ]
},
{
  alt: '',
  src: '',
  activityType: ActivityType.Craft,
  title: 'Sewing'
},
{
  alt: '',
  src: 'sup - stand up paddleboard.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.sup,
  title: 'SUP',
  paras: [
    'SUP (Stand Up Paddleboard) for all levels.',
    'This is a great place to learn with a number of flat water lakes.', 
  ]
},
{
  alt: '',
  src: '',
  activityType: ActivityType.Craft,
  title: 'Book Making'
},
{
  alt: '',
  src: 'windsurfing.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.windsurfing.icon,
  title: 'Windsurfing *',
  paras: [
    'Windsurfing with several great lakes to choose from including Lac Saint Pardoux', 
    'Equipment rental and training available'
  ]
}, {
  alt: '',
  src: '',
  activityType: ActivityType.WaterSports,
  title: 'Windfoil *',
  icon: activityIcon.foil.icon,
  paras: [
    'Windfoil for all levels ', 
    'Equipment rental and training available'
  ]
}, {
  alt: 'Wing Surfing and Foil',
  src: 'wing surfing and foil.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.foil.icon,
  title: 'Wing Surfing and Foil *',
  paras: [
    'Wing Surfing and foil on Lac Saint Pardoux a lake of 330 Hectares.'
  ]
}, {
  alt: 'Wind Sup',
  src: 'windsup.jpg',
  activityType: ActivityType.WaterSports,
  icon: activityIcon.windsurfing.icon,
  title: 'Wind SUP *',
  paras: [
    'Wind Sup is a very similar to windsurfing but with a much larger more stable board.',
    'It is a great starting place for those wishing to learn windsurfing of wing surfing.'
  ]
}] as Activity[];

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  public get(): Observable<Activity[]> {
    return of(
      data
        .filter(d => d.src)
        .map((act, id) => ({ 
          ...act, 
          src: `/assets/${act.src}`,
          id
        }))
      );
  }
}
