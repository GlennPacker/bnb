import { Component } from '@angular/core';
import { activityIcon } from 'src/app/core/models/activityIcons';
import Facility from '../../models/Facility';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  public facilities: Facility[] = [{
    description: 'Hot Tub',
    icon: 'hot_tub'
  }, {
    description: 'Pool',
    icon: 'pool'
  },
  activityIcon.wifi,
  activityIcon.views,
  {
    description: 'Pets allowed',
    tooltip: 'Dogs must be friendly and get on well with other people and animals. We reserve the right of refusal.',
    icon: 'pets'
  }, {
    description: 'Cards and Games',
    icon: 'casino'
  }, {
    description: 'BBQ',
    icon: 'outdoor_grill'
  }, {
    description: 'TV',
    icon: 'tv'
  }, {
    description: 'Dedicated workspace',
    icon: 'desk'
  }, {
    description: 'Evening Meals and Picnics to order',
    tooltip: 'Must give reasonable notice. This is a paid extra service.',
    icon: 'restaurant'
  }, {
    description: 'Outdoor Dining Furniture',
    icon: 'deck'
  }, {
    description: 'Tea & Coffee making facilities',
    icon: 'coffee'
  }, {
    description: 'Long Term Stays Available',
    icon: 'calendar_month'
  }]
  public sports = [{
    ...activityIcon.paragliding,
    tooltip: 'Must have a license and insurance',
  },
  activityIcon.kayaking,
  {
    ...activityIcon.basketball,
    description: 'Basketball and hoop',
  },
  activityIcon.windsurfing,
  activityIcon.foil,
  {
    description: 'Small Gym',
    icon: 'fitness_center'
  },
  activityIcon.hiking,
  {
    ...activityIcon.sup,
    description: 'SUP',
    tooltip: 'Stand Up Paddleboard',
  },
  activityIcon.cycling
  ]
  public transport = [{
    description: 'Free parking on premises',
    icon: 'directions_car'
  }, {
    description: 'Close to Train Station',
    icon: 'train'
  }, {
    description: 'Half hour from airport',
    icon: 'flight'
  }, {
    description: 'Airport pickup',
    tooltip: 'Free when staying 2 or more nights.',
    icon: 'airport_shuttle'
  }]
}
